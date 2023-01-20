import {
  SpaceProps,
  TypographyProps as BaseTypographyProps,
  ColorProps,
  BorderProps,
} from 'styled-system'

export interface TypographyProps
  extends SpaceProps,
    BaseTypographyProps,
    ColorProps,
    BorderProps {
  font?: string
  color?: string
  fontSize?: number
  lineHeight?: string
  textTransform?: string
  textAlign?: 'left' | 'center' | 'right'
}
