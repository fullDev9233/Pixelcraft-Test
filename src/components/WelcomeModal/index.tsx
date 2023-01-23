import { useTheme } from 'styled-components'
import Canvas from '../Canvas'
import FlexBox from '../Commons/FlexBox'
import Modal from '../Commons/Modal'
import Typography from '../Commons/Typography'
import { ModalContainer } from '../Commons/Modal/styles'
import {
  ModalBody,
  ModalContent,
  SectionTop,
  SectionBottom,
  Ul,
  Li,
  HDivider,
} from './styles'
import GotchiETH from '../../assets/imgs/GotchiETH.png'

const width = 704
const height = 700
const height1 = 330
const lineWidth = 3
const topColor = '#FFD600'
const bottomColor = '#00B9E1'

const WelcomeModal = () => {
  const theme = useTheme()

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

    ctx.fillRect(0, 38, 10, 10)

    ctx.beginPath()
    ctx.moveTo(0, height1 * 0.13)
    ctx.lineTo(point1, height1 * 0.13)
    ctx.lineTo(point2, lineWidth / 2)
    ctx.lineTo(point3, lineWidth / 2)
    ctx.lineTo(point4, height1 * 0.13)
    ctx.lineTo(point5, height1 * 0.13)
    ctx.stroke()

    ctx.fillRect(width - 10, 38, 10, 10)

    // Draw the bottom curve
    ctx.fillStyle = bottomColor
    ctx.strokeStyle = bottomColor

    ctx.fillRect(0, height * 0.94 - 5, 10, 10)

    ctx.beginPath()
    ctx.moveTo(0, height * 0.94)
    ctx.lineTo(point1 - 40, height * 0.94)
    ctx.lineTo(point2 - 40, height - lineWidth / 2)
    ctx.lineTo(point3 + 40, height - lineWidth / 2)
    ctx.lineTo(point4 + 40, height * 0.94)
    ctx.lineTo(point5, height * 0.94)
    ctx.stroke()

    ctx.fillRect(width - 10, height * 0.94 - 5, 10, 10)
  }

  return (
    <Modal wrapperId='welcome-modal'>
      <ModalContainer>
        <ModalBody width={width} height={height}>
          <Canvas draw={drawArt} width={width} height={height} />
          <SectionTop width={width} height={height1} />
          <div style={{ height: '60px' }} />
          <SectionBottom width={width} height={height1} />
        </ModalBody>
        <ModalContent>
          <Typography fontSize={42}>welcome</Typography>
          <Typography mb='28px'>to the aarena!</Typography>
          <Typography
            font='PixelarRegularW01-Regular'
            fontSize={32}
            lineHeight='32px'
            color={theme.colors.textSecondary}
            mb='32px'
          >
            The Aarena is currently full!
          </Typography>
          <FlexBox>
            <img
              src={GotchiETH}
              alt='GotchiETH'
              style={{ marginRight: '20px' }}
            />
            <div>
              <Typography
                font='PixelarRegularW01-Regular'
                fontSize={42}
                lineHeight='39px'
                textTransform='uppercase'
                color={theme.colors.textSecondary}
              >
                THERE ARE&nbsp;
                <span
                  style={{
                    fontFamily: 'PixelarRegularW01-Regular',
                    color: '#FFD600',
                    fontSize: 42,
                    lineHeight: '39px',
                  }}
                >
                  17
                </span>
                &nbsp;GOTCHIS AHEAD OF YOU
              </Typography>
              <Typography
                font='PixelarRegularW01-Regular'
                fontSize={30}
                lineHeight='32px'
                textTransform='uppercase'
                color={theme.colors.textSecondary}
              >
                You will automatically join once a spot opens!
              </Typography>
            </div>
          </FlexBox>

          <FlexBox mt='50px'>
            <HDivider />
            <Typography
              fontSize={42}
              lineHeight='46px'
              color={theme.colors.secondary}
              m='0 15px'
            >
              Aarena Rules
            </Typography>
            <HDivider />
          </FlexBox>

          <Typography
            font='PixelarRegularW01-Regular'
            fontSize={32}
            lineHeight='30px'
            color={theme.colors.secondary}
            textTransform='uppercase'
            m='30px 0 20px 0'
          >
            To EXIT the Aarena with your winnings you must:
          </Typography>
          <Ul>
            <Li>
              <Typography
                font='PixelarRegularW01-Regular'
                fontSize={28}
                lineHeight='26px'
                color={theme.colors.textSecondary}
                textAlign='left'
              >
                Defeat at least 1 gotchi
              </Typography>
            </Li>
            <Li>
              <Typography
                font='PixelarRegularW01-Regular'
                fontSize={28}
                lineHeight='26px'
                color={theme.colors.textSecondary}
                textAlign='left'
              >
                Survive for at least 3 minutes
              </Typography>
            </Li>
          </Ul>
          <Typography
            font='PixelarRegularW01-Regular'
            fontSize={28}
            lineHeight='26px'
            color={theme.colors.textPrimary}
            mt='50px'
          >
            EXITING WITHOUT MEETING THESE CRITERIA
            <br />
            WILL FORFEIT ALL YOUR WINNINGS!
          </Typography>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

export default WelcomeModal
