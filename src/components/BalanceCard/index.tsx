import { useTheme } from 'styled-components'
import FlexBox from '../Commons/FlexBox'
import Typography from '../Commons/Typography'
import Button from '../Commons/Button'
import { Card, CardBody } from '../GalleryModal/styles'
import { BalanceInfo, CollectionWrapper, RemainingWrapper } from './styles'
import formatNumbers from '../../utils/formatNumbers'

import ChannelImg from '../../assets/imgs/channel.png'
import KekImg from '../../assets/imgs/kek.png'
import FudImg from '../../assets/imgs/fud.png'
import AlphaImg from '../../assets/imgs/alpha.png'
import FomoImg from '../../assets/imgs/fomo.png'

const collectedData = [
  {
    name: 'kek',
    img: KekImg,
    balance: 4000,
  },
  {
    name: 'fud',
    img: FudImg,
    balance: 13000,
  },
  {
    name: 'alpha',
    img: AlphaImg,
    balance: 27000,
  },
  {
    name: 'fomo',
    img: FomoImg,
    balance: 2500,
  },
]

const remainingData = [
  {
    name: 'kek',
    img: KekImg,
    balance: '320K',
  },
  {
    name: 'fud',
    img: FudImg,
    balance: '877K',
  },
  {
    name: 'alpha',
    img: AlphaImg,
    balance: '1M',
  },
  {
    name: 'fomo',
    img: FomoImg,
    balance: '12K',
  },
]

const BalanceCard = () => {
  const theme = useTheme()

  return (
    <Card>
      <CardBody>
        <BalanceInfo>
          <CollectionWrapper>
            <Typography
              font='PixelarRegularW01-Regular'
              fontSize={36}
              lineHeight='37px'
              textTransform='uppercase'
              color={theme.colors.textCollection}
            >
              Collected
            </Typography>
            {collectedData.map((element) => (
              <FlexBox
                key={element.name}
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  marginTop: '25px',
                }}
              >
                <img src={element.img} alt='BalanceIcon' />
                <Typography
                  font='PixelarRegularW01-Regular'
                  fontSize={32}
                  lineHeight='30px'
                  ml='8px'
                >
                  {formatNumbers(element.balance)}
                </Typography>
              </FlexBox>
            ))}
          </CollectionWrapper>

          <RemainingWrapper>
            <Typography
              font='PixelarRegularW01-Regular'
              fontSize={36}
              lineHeight='37px'
              textTransform='uppercase'
              color={theme.colors.textSecondary}
            >
              Remaining
            </Typography>
            {remainingData.map((element) => (
              <FlexBox
                key={element.name}
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  marginTop: '25px',
                }}
              >
                <img src={element.img} alt='BalanceIcon' />
                <Typography
                  font='PixelarRegularW01-Regular'
                  fontSize={32}
                  lineHeight='30px'
                  ml='8px'
                >
                  {element.balance}
                </Typography>
              </FlexBox>
            ))}
          </RemainingWrapper>
        </BalanceInfo>
      </CardBody>
      <Button
        title='Empty Reservoirs'
        borderColor={theme.colors.buttonBorder2}
        buttonBg={theme.colors.border}
        buttonInnerTopBorder={theme.colors.buttonInnerTopBorder2}
        buttonInnerBottomBorder={theme.colors.buttonInnerBottomBorder2}
      />
      <FlexBox>
        <img src={ChannelImg} alt='Channel' />
        <Typography
          font='PixelarRegularW01-Regular'
          fontSize={32}
          lineHeight='30px'
          textTransform='uppercase'
          color={theme.colors.textChannel}
          ml='8px'
        >
          Ready to Channel
        </Typography>
      </FlexBox>
    </Card>
  )
}

export default BalanceCard
