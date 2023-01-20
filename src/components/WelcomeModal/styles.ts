import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  z-index: 1100;
`

export const ModalBody = styled.div<{ width: number; height: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || 600}px;
  height: ${({ height }) => height || 600}px;
  max-width: fit-content;
  transition: transform 0.3s ease-out;
  transform: none;

  ${({ theme }) => theme.mediaQueries.md} {
    width: ${({ width }) => width || 600}px;
  }
`

export const ModalContent = styled.div`
  position: absolute;
`

export const SectionTop = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: linear-gradient(
      179.98deg,
      rgba(255, 214, 0, 0.4) 2.93%,
      rgba(255, 214, 0, 0) 43.91%,
      rgba(255, 214, 0, 0.024) 65.5%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.45) 27.8%, rgba(0, 0, 0, 0) 73.65%);
  -webkit-clip-path: polygon(
    0% 13%,
    29% 13%,
    34% 0%,
    66% 0%,
    71% 13%,
    100% 13%,
    100% 100%,
    0% 100%
  );
  clip-path: polygon(
    0% 13%,
    29% 13%,
    34% 0%,
    66% 0%,
    71% 13%,
    100% 13%,
    100% 100%,
    0% 100%
  );
`

export const SectionBottom = styled(SectionTop)`
  background: linear-gradient(
      180deg,
      rgba(0, 185, 225, 0.5) 17.01%,
      rgba(0, 185, 225, 0) 96.53%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.4) 17.01%, rgba(0, 0, 0, 0) 96.53%);
  opacity: 0.8;
  transform: matrix(1, 0, 0, -1, 0, 0);
  -webkit-clip-path: polygon(
    0% 13%,
    23.5% 13%,
    28.5% 0%,
    71.5% 0%,
    76.5% 13%,
    100% 13%,
    100% 100%,
    0% 100%
  );
  clip-path: polygon(
    0% 13%,
    23.5% 13%,
    28.5% 0%,
    71.5% 0%,
    76.5% 13%,
    100% 13%,
    100% 100%,
    0% 100%
  );
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Li = styled.li`
  width: 300px;
  ::marker {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

export const HDivider = styled.div`
  width: 132px;
  border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
`
