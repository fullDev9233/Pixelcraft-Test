import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/global'

const DashBoard = lazy(() => import('./pages/Dashboard'))

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path='/' element={<DashBoard />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
