import { createGlobalStyle } from 'styled-components'
import AlienEncountersBold from '../assets/fonts/Alien-Encounters-Bold.ttf'
import AlienEncountersRegular from '../assets/fonts/Alien-Encounters-Regular.ttf'
import PixelarRegularW01Regular from '../assets/fonts/Pixelar-Regular-W01-Regular.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Alien Encounters';
    src: url(${AlienEncountersRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Alien Encounters Bold';
    src: url(${AlienEncountersBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'PixelarRegularW01-Regular';
    src: url(${PixelarRegularW01Regular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Alien Encounters;
    font-size: 12px;
    line-height: 1.3;
  }
  #root {
    margin: 0 auto;
  }
`
