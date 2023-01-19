import { useState } from 'react'
import GlobalStyle from './styles/global'
import WelcomeModal from './components/WelcomeModal'

const App = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false)

  const handleOpen = () => {
    setIsOpenedModal(true)
  }

  return (
    <>
      <GlobalStyle />
      <button onClick={handleOpen}>Open</button>
      {isOpenedModal && <WelcomeModal />}
    </>
  )
}

export default App
