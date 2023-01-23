import { DefaultTheme, useTheme } from 'styled-components'
import FlexBox from '../Commons/FlexBox'
import Typography from '../Commons/Typography'
import Button from '../Commons/Button'
import { Card, CardBody } from '../GalleryModal/styles'
import { FeaturesWrapper, NFTStatsWrapper } from './styles'

import KekImg from '../../assets/imgs/kek.png'
import FudImg from '../../assets/imgs/fud.png'
import AlphaImg from '../../assets/imgs/alpha.png'
import FomoImg from '../../assets/imgs/fomo.png'

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

const nftStats = [
  {
    title: 'Total claimed',
    stats: ['320K', '870K', '1M', '12K'],
  },
  {
    title: 'Harvest / Day',
    stats: ['15,000', '2,000', '1,342', '1,800'],
  },
  {
    title: 'Reservoirs Capacity',
    stats: ['17,000', '13,000', '2,000', '1,500'],
  },
]

interface NFTStatsProps {
  title: string
  stats: string[]
  theme: DefaultTheme
}

const NFTStats = ({ title, stats, theme }: NFTStatsProps) => (
  <NFTStatsWrapper>
    <Typography
      font='PixelarRegularW01-Regular'
      fontSize={24}
      lineHeight='22px'
      color={theme.colors.textSecondary}
      mb='4px'
      style={{ opacity: '0.6' }}
    >
      {title}
    </Typography>
    <FlexBox style={{ justifyContent: 'space-between', width: '100%' }}>
      {stats.map((element, id) => (
        <Typography
          key={element}
          font='PixelarRegularW01-Regular'
          fontSize={28}
          lineHeight='26px'
          color={
            id === 0
              ? '#F934F3'
              : id === 1
              ? '#52BB34'
              : id === 2
              ? '#3BCCFF'
              : '#DF2B25'
          }
        >
          {element}
        </Typography>
      ))}
    </FlexBox>
  </NFTStatsWrapper>
)

const StatsCard = () => {
  const theme = useTheme()

  return (
    <Card>
      <CardBody>
        <Typography
          font='PixelarRegularW01-Regular'
          fontSize={36}
          lineHeight='37px'
          textTransform='uppercase'
          color={theme.colors.textSecondary}
          mb='15px'
        >
          Stats
        </Typography>
        <FeaturesWrapper>
          {remainingData.map((element) => (
            <img key={element.name} src={element.img} alt='BalanceIcon' />
          ))}
        </FeaturesWrapper>
        {nftStats.map((element) => (
          <NFTStats
            key={element.title}
            title={element.title}
            stats={element.stats}
            theme={theme}
          />
        ))}
      </CardBody>
      <Button
        title='Survey Parcel'
        borderColor={theme.colors.buttonBorder3}
        buttonBg={theme.colors.buttonBg2}
        buttonInnerTopBorder={theme.colors.buttonInnerTopBorder3}
        buttonInnerBottomBorder={theme.colors.buttonInnerBottomBorder3}
      />
    </Card>
  )
}

export default StatsCard
