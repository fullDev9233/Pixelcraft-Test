import styled from 'styled-components'
import FlexBox from '../FlexBox'

export const Container = styled(FlexBox)`
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background: ${({ theme }) => theme.colors.primary};
  backdrop-filter: blur(4px);
  z-index: 100;
`

export const ModalBody = styled(FlexBox)`
  flex-direction: column;
  width: 300px;
  max-width: fit-content;
  height: auto;
  margin: 60px auto;
  transition: transform 0.3s ease-out;
  transform: none;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 600px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 670px;
  }
`
