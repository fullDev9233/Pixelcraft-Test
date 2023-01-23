import { useState } from 'react'
import FlexBox from '../../components/Commons/FlexBox'
import GalleryModal from '../../components/GalleryModal'
import WelcomeModal from '../../components/WelcomeModal'
import { Container, Button } from './styles'

const Dashboard = () => {
  const [isOpenedWelcomeModal, setIsOpenedWelcomeModal] = useState(false)
  const [isOpenedGalleryModal, setIsOpenedGalleryModal] = useState(false)

  const handleChange1 = () => {
    setIsOpenedWelcomeModal(true)
  }

  const handleChange2 = () => {
    setIsOpenedGalleryModal(true)
  }

  return (
    <Container>
      <FlexBox style={{ justifyContent: 'space-between' }}>
        <Button onClick={handleChange1}>Welcome Modal</Button>
        <Button onClick={handleChange2}>Gallery Modal</Button>
      </FlexBox>
      {isOpenedWelcomeModal && <WelcomeModal />}
      {isOpenedGalleryModal && <GalleryModal />}
    </Container>
  )
}

export default Dashboard
