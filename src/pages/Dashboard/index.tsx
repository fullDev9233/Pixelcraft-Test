import { useState } from 'react'
import WelcomeModal from '../../components/WelcomeModal'
import { Container } from './styles'

const Dashboard = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false)

  const handleChange = () => {
    setIsOpenedModal(true)
  }

  return (
    <Container>
      <button
        style={{
          margin: '20px',
          padding: '12px 24px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={handleChange}
      >
        Open
      </button>
      {isOpenedModal && <WelcomeModal />}
    </Container>
  )
}

export default Dashboard
