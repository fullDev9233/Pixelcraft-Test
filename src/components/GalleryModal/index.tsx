import { useTheme } from 'styled-components'
import FlexBox from '../Commons/FlexBox'
import Modal from '../Commons/Modal'
import Typography from '../Commons/Typography'
import { ModalContainer } from '../Commons/Modal/styles'
import { ModalBody, ModalContent, ModalTitle, Card } from './styles'
import LockImg from '../../assets/imgs/lock.png'

const width = 1200
const height = 668

const GalleryModal = () => {
  const theme = useTheme()

  return (
    <Modal wrapperId='welcome-modal'>
      <ModalContainer>
        <ModalTitle>
          <Typography
            font='PixelarRegularW01-Regular'
            fontSize={54}
            lineHeight='50px'
            color={theme.colors.textSecondary}
            textTransform='uppercase'
          >
            REALM #18763
          </Typography>
        </ModalTitle>
        <ModalBody width={width} height={height}>
          <ModalContent width={width} height={height}>
            <section style={{ position: 'relative' }}>
              <FlexBox
                style={{
                  position: 'absolute',
                  top: '30px',
                  justifyContent: 'flex-start',
                }}
              >
                <img src={LockImg} alt='Lock' />
                <Typography
                  font='PixelarRegularW01-Regular'
                  fontSize={30}
                  lineHeight='20px'
                  textTransform='uppercase'
                  color={theme.colors.border}
                  ml='8px'
                >
                  Access
                  <br />
                  Rights
                </Typography>
              </FlexBox>
              <Card>hello world</Card>
            </section>
            <div>hello world</div>
            <div>hello world</div>
          </ModalContent>
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

export default GalleryModal
