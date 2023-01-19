import React, { useEffect, useRef } from 'react'

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & {
  draw: (context: CanvasRenderingContext2D) => void
}

const Canvas = ({ draw, ...props }: CanvasProps) => {
  const width = Number(props.width) || 600
  const height = Number(props.height) || 600

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    draw(context)

    return () => {
      context.clearRect(0, 0, width, height)
    }
  }, [draw, height, width])

  return (
    <canvas
      width={width}
      height={height}
      ref={canvasRef}
      style={{ position: 'absolute' }}
    />
  )
}

export default Canvas
