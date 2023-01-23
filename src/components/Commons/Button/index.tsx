import { useTheme } from 'styled-components'
import Typography from '../Typography'
import { ButtonWrapper, Button as StyledButton } from './styles'

interface ButtonProps {
  title: string
  borderColor: string
  buttonBg: string
  buttonInnerTopBorder: string
  buttonInnerBottomBorder: string
}

const Button = ({
  title,
  borderColor,
  buttonBg,
  buttonInnerTopBorder,
  buttonInnerBottomBorder,
}: ButtonProps) => {
  const theme = useTheme()

  return (
    <ButtonWrapper borderColor={borderColor}>
      <StyledButton
        buttonBg={buttonBg}
        buttonInnerTopBorder={buttonInnerTopBorder}
        buttonInnerBottomBorder={buttonInnerBottomBorder}
      >
        <Typography
          font='PixelarRegularW01-Regular'
          fontSize={40}
          lineHeight='37px'
          color={theme.colors.textSecondary}
          mt='-6px'
        >
          {title}
        </Typography>
      </StyledButton>
    </ButtonWrapper>
  )
}

export default Button
