import styled from 'styled-components'
import BgImg from '../../assets/imgs/bg.png'

export const Container = styled.div`
  min-height: 100vh;
  background: url(${BgImg});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Button = styled.button`
  margin: 20px;
  padding: 12px 24px;
  fontsize: 16px;
  cursor: pointer;
`
