import styled from 'styled-components'

export const ModalBody = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${({ width }) => width || 600}px;
  height: ${({ height }) => height || 600}px;
  background: #f2f2f2;
`

export const SectionTop = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 33px;
  background: linear-gradient(
      179.98deg,
      rgba(255, 214, 0, 0.4) 2.93%,
      rgba(255, 214, 0, 0) 43.91%,
      rgba(255, 214, 0, 0.024) 65.5%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.45) 27.8%, rgba(0, 0, 0, 0) 73.65%);
`

export const TextTitle = styled.p`
  font-family: 'Alien Encounters';
  font-size: 42px;
  line-height: 60px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
  text-align: center;
`
