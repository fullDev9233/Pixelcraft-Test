import styled from 'styled-components'
import { space, layout, LayoutProps, SpaceProps } from 'styled-system'

interface FlexBoxProps extends LayoutProps, SpaceProps {
  direction?: string
  align?: string
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ align }) => align || 'center'};
  align-items: center;

  ${layout}
  ${space}
`

export default FlexBox
