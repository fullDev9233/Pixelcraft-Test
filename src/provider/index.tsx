import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

interface ProviderProps {
  children: any
}

const Provider = ({ children }: ProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Provider
