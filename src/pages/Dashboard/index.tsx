import { useState } from 'react'
import WelcomeModal from '../../components/WelcomeModal'
import { Container } from './styles'

const Dashboard = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false)

  const handleOpen = () => {
    setIsOpenedModal(true)
  }
  return (
    <Container>
      <button onClick={handleOpen}>Open</button>
      {isOpenedModal && <WelcomeModal />}
    </Container>
  )
}

export default Dashboard
