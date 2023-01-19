import Modal from '../common/Modal'
import Canvas from '../Canvas'
import { ModalBody, SectionTop, TextTitle } from './styles'

const width = 600
const height = 600
const delta = 40
const lineWidth = 3
const topColor = '#FFD600'
const bottomColor = '#00B9E1'

const WelcomeModal = () => {
  const point1 = parseInt((width / 3).toString()) - delta
  const point2 = point1 + delta
  const point3 = point2 + point1 + delta
  const point4 = point3 + delta
  const point5 = width

  const drawArt = (ctx: CanvasRenderingContext2D) => {
    // Draw the top curve
    ctx.fillStyle = topColor
    ctx.lineWidth = lineWidth
    ctx.lineJoin = 'round'
    ctx.strokeStyle = topColor

    ctx.fillRect(0, 45, 10, 10)

    ctx.beginPath()
    ctx.moveTo(0, 50)
    ctx.lineTo(point1, 50)
    ctx.lineTo(point2, lineWidth / 2)
    ctx.lineTo(point3, lineWidth / 2)
    ctx.lineTo(point4, 50)
    ctx.lineTo(point5, 50)
    ctx.stroke()

    ctx.fillRect(590, 45, 10, 10)

    // Draw the bottom curve
    ctx.fillStyle = bottomColor
    ctx.strokeStyle = bottomColor

    ctx.fillRect(0, 545, 10, 10)

    ctx.beginPath()
    ctx.moveTo(0, 550)
    ctx.lineTo(point1, 550)
    ctx.lineTo(point2, height - lineWidth / 2)
    ctx.lineTo(point3, height - lineWidth / 2)
    ctx.lineTo(point4, 550)
    ctx.lineTo(point5, 550)
    ctx.stroke()

    ctx.fillRect(590, 545, 10, 10)
  }

  return (
    <Modal wrapperId='welcome-modal'>
      <ModalBody width={width} height={height}>
        <Canvas draw={drawArt} width={width} height={height} />
        <SectionTop>
          <TextTitle>
            welcome
            <br /> to the aarena!
          </TextTitle>
        </SectionTop>
      </ModalBody>
    </Modal>
  )
}

export default WelcomeModal
