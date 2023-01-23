import { useTheme } from 'styled-components'
import Typography from '../Typography'
import { ButtonWrapper, Button as StyledButton } from './styles'

const Button = () => {
  const theme = useTheme()

  return (
    <ButtonWrapper>
      <StyledButton>
        <Typography
          font='PixelarRegularW01-Regular'
          fontSize={40}
          lineHeight='37px'
          color={theme.colors.textSecondary}
        >
          Channel Alchemica
        </Typography>
      </StyledButton>
    </ButtonWrapper>
  )
}

export default Button
