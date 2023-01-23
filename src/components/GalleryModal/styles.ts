import styled from 'styled-components'

export const ModalBody = styled.div<{ width: number; height: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || 600}px;
  height: ${({ height }) => height || 600}px;
  transition: transform 0.3s ease-out;
  transform: none;
  -webkit-clip-path: polygon(
    0% 3%,
    1.8% 3%,
    1.8% 0%,
    98.2% 0%,
    98.2% 3%,
    100% 3%,
    100% 97%,
    98.2% 97%,
    98.2% 100%,
    1.8% 100%,
    1.8% 97%,
    0% 97%
  );
  clip-path: polygon(
    0% 3%,
    2% 3%,
    2% 0%,
    98% 0%,
    98% 3%,
    100% 3%,
    100% 97%,
    98% 97%,
    98% 100%,
    2% 100%,
    2% 97%,
    0% 97%
  );
  background: #c82ac2;

  ${({ theme }) => theme.mediaQueries.md} {
    width: ${({ width }) => width || 600}px;
  }
`

export const ModalContent = styled(ModalBody)`
  position: absolute;
  top: 3px;
  left: 3px;
  width: ${({ width }) => width - 6}px;
  height: ${({ height }) => height - 6}px;
  background: rgba(0, 0, 0, 0.85);
`
