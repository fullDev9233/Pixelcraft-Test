import styled from 'styled-components'
import {
  space,
  typography as baseTypography,
  border,
  color as baseColor,
} from 'styled-system'
import { TypographyProps } from './types'

const Typography = styled.p<TypographyProps>`
  font-family: ${({ font }) => font || 'Alien Encounters'};
  font-size: ${({ fontSize }) => fontSize || 56}px;
  line-height: ${({ lineHeight }) => lineHeight || 60}px;
  color: ${({ color, theme }) => color || theme.colors.textPrimary};
  text-transform: ${({ textTransform }) => textTransform || 'inherit'};
  text-align: ${({ textAlign }) => textAlign || 'center'};

  ${space}
  ${baseTypography}
  ${border}
  ${baseColor}
`

export default Typography
