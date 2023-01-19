import styled from 'styled-components'

export const ModalBody = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${({ width }) => width || 600}px;
  height: ${({ height }) => height || 600}px;
  background: #fff;
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
`

export const TextTitle = styled.p`
  font-family: 'Alien Encounters';
  font-size: 42px;
  line-height: 60px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
  text-align: center;
`
