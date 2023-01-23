import Modal from '../Commons/Modal'
import { ModalContainer } from '../Commons/Modal/styles'
import { ModalBody, ModalContent } from './styles'

const width = 1200
const height = 668
// const height1 = 330
// const lineWidth = 3
// const topColor = '#FFD600'
// const bottomColor = '#00B9E1'

const GalleryModal = () => {
  return (
    <Modal wrapperId='welcome-modal'>
      <ModalContainer>
        <ModalBody width={width} height={height}>
          <ModalContent width={width} height={height} />
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

export default GalleryModal
