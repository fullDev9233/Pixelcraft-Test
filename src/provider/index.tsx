import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

interface ProviderProps {
  children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Provider
