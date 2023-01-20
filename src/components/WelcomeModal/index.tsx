import Modal from '../Commons/Modal'
import Canvas from '../Canvas'
import {
  ModalContainer,
  ModalBody,
  SectionTop,
  SectionBottom,
  TextTitle,
} from './styles'

const width = 600
const height = 600
const height1 = 270
const lineWidth = 3
const topColor = '#FFD600'
const bottomColor = '#00B9E1'

const WelcomeModal = () => {
  const point1 = parseInt((width * 0.29).toString())
  const point2 = parseInt((width * 0.34).toString())
  const point3 = parseInt((width * 0.66).toString())
  const point4 = parseInt((width * 0.71).toString())
  const point5 = width

  const drawArt = (ctx: CanvasRenderingContext2D) => {
    // Draw the top curve
    ctx.fillStyle = topColor
    ctx.lineWidth = lineWidth
    ctx.lineJoin = 'round'
    ctx.strokeStyle = topColor

    ctx.fillRect(0, 30, 10, 10)

    ctx.beginPath()
    ctx.moveTo(0, height1 * 0.13)
    ctx.lineTo(point1, height1 * 0.13)
    ctx.lineTo(point2, lineWidth / 2)
    ctx.lineTo(point3, lineWidth / 2)
    ctx.lineTo(point4, height1 * 0.13)
    ctx.lineTo(point5, height1 * 0.13)
    ctx.stroke()

    ctx.fillRect(590, 30, 10, 10)

    // Draw the bottom curve
    ctx.fillStyle = bottomColor
    ctx.strokeStyle = bottomColor

    ctx.fillRect(0, height * 0.94 - 5, 10, 10)

    ctx.beginPath()
    ctx.moveTo(0, height * 0.94)
    ctx.lineTo(point1, height * 0.94)
    ctx.lineTo(point2, height - lineWidth / 2)
    ctx.lineTo(point3, height - lineWidth / 2)
    ctx.lineTo(point4, height * 0.94)
    ctx.lineTo(point5, height * 0.94)
    ctx.stroke()

    ctx.fillRect(590, height * 0.94 - 5, 10, 10)
  }

  return (
    <Modal wrapperId='welcome-modal'>
      <ModalContainer>
        <ModalBody width={width} height={height}>
          <Canvas draw={drawArt} width={width} height={height} />
          <SectionTop width={width} height={height1} />
          <div style={{ height: '60px', background: 'red' }}></div>
          <SectionBottom width={width} height={height1} />
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

export default WelcomeModal
