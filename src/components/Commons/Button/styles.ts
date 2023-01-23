import styled from 'styled-components'

const clipPath1 = `polygon(0% 8%, 2% 8%, 2% 0%, 98% 0%, 98% 8%, 100% 8%, 100% 92%, 98% 92%, 98% 100%, 2% 100%, 2% 92%, 0% 92%)`

const clipPath2 = `polygon(0% 85%, 97% 85%, 97% 12%, 100% 12%, 100% 100%, 0% 100%)`

export const ButtonWrapper = styled.div<{ borderColor: string }>`
  width: 100%;
  height: 80px;
  margin: 45px 0 16px;
  background: ${({ borderColor }) => borderColor};
  -webkit-clip-path: ${clipPath1};
  clip-path: ${clipPath1};
`

export const Button = styled.button<{
  buttonBg: string
  buttonInnerTopBorder: string
  buttonInnerBottomBorder: string
}>`
  position: relative;
  top: 8%;
  left: 2%;
  width: 96%;
  height: 84%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ buttonBg }) => buttonBg};
  border: none;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 8px;
    background: ${({ buttonInnerTopBorder }) => buttonInnerTopBorder};
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 67.2px;
    background: ${({ buttonInnerBottomBorder }) => buttonInnerBottomBorder};
    -webkit-clip-path: ${clipPath2};
    clip-path: ${clipPath2};
  }
`
