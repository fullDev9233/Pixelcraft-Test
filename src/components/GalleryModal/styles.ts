import styled from 'styled-components'
import FlexBox from '../Commons/FlexBox'
import customPolygonGenerator from '../../utils/customPolygonGenerator'

export const ModalBody = styled.div<{ width: number; height: number }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 70px;
  width: ${({ width }) => width || 600}px;
  height: ${({ height }) => height || 600}px;
  transition: transform 0.3s ease-out;
  transform: none;
  -webkit-clip-path: ${customPolygonGenerator()};
  clip-path: ${customPolygonGenerator()};
  background: ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ModalContent = styled(ModalBody)`
  position: absolute;
  top: 3px;
  left: 3px;
  width: ${({ width }) => width - 6}px;
  height: ${({ height }) => height - 6}px;
  padding: 0 66px 66px;
  background: rgba(0, 0, 0, 0.85);
`

export const ModalTitle = styled(FlexBox)`
  position: absolute;
  top: 5px;
  width: 568px;
  height: 100px;
  background: #000000;
  border: ${({ theme }) => `3px solid ${theme.colors.border}`};
  box-shadow: 0px 0px 10px 4px rgba(200, 42, 194, 0.8);
  border-radius: 3px;
  z-index: 20000;
`

export const Card = styled.div`
  margin-top: 110px;
`

export const CardBody = styled(FlexBox)`
  position: relative;
  flex-direction: column;
  height: 320px;
`
