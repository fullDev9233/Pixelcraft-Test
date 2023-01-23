import { useTheme } from 'styled-components'
import Typography from '../Commons/Typography'
import { ButtonWrapper, Button } from '../Commons/Button'
import { Card } from '../GalleryModal/styles'
import { ItemLevel, AvatarWrapper, AvatarInnerWrapper } from './styles'
import AvatarImg from '../../assets/imgs/avatar.png'

const width = 246
const height = 276

const ItemCard = () => {
  const theme = useTheme()

  return (
    <Card>
      <ItemLevel>
        <Typography
          font='PixelarRegularW01-Regular'
          fontSize={52}
          lineHeight='25px'
          color={theme.colors.textSecondary}
        >
          1
        </Typography>
        <Typography
          font='PixelarRegularW01-Regular'
          fontSize={22}
          lineHeight='20px'
          color={theme.colors.textSecondary}
        >
          Level
        </Typography>
      </ItemLevel>
      <AvatarWrapper width={width} height={height}>
        <AvatarInnerWrapper width={width} height={height}>
          <img src={AvatarImg} alt='Avatar' />
          <Typography
            font='PixelarRegularW01-Regular'
            fontSize={38}
            lineHeight='28px'
            textTransform='uppercase'
            color={theme.colors.textSecondary}
            mt='8px'
          >
            Alchemical
            <br />
            AALTAR
          </Typography>
        </AvatarInnerWrapper>
      </AvatarWrapper>
      <ButtonWrapper>
        <Button>
          <Typography
            font='PixelarRegularW01-Regular'
            fontSize={40}
            lineHeight='37px'
            color={theme.colors.textSecondary}
          >
            Channel Alchemica
          </Typography>
        </Button>
      </ButtonWrapper>
    </Card>
  )
}

export default ItemCard
