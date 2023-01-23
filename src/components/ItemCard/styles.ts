import styled from 'styled-components'
import FlexBox from '../Commons/FlexBox'
import customPolygonGenerator from '../../utils/customPolygonGenerator'

export const ItemLevel = styled(FlexBox)`
  position: absolute;
  top: 15px;
  left: 0;
  flex-direction: column;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.level};
  border: ${({ theme }) => `4px solid ${theme.colors.border}`};
  box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  z-index: 1000;
`

export const AvatarWrapper = styled(FlexBox)<{ width: number; height: number }>`
  position: relative;
  flex-direction: column;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-top: 44px;
  -webkit-clip-path: ${customPolygonGenerator()};
  clip-path: ${customPolygonGenerator()};
  background: ${({ theme }) => theme.colors.border};
`

export const AvatarInnerWrapper = styled(AvatarWrapper)`
  position: absolute;
  top: 1.5px;
  left: 1.5px;
  width: ${({ width }) => width - 3}px;
  height: ${({ height }) => height - 3}px;
  margin-top: 0;
  background: linear-gradient(
      180deg,
      rgba(200, 42, 194, 0.4) 0%,
      rgba(200, 42, 194, 0.2) 105.15%
    ),
    rgba(0, 0, 0, 0.8);
`
