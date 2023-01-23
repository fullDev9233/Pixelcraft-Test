import styled from 'styled-components'
import FlexBox from '../Commons/FlexBox'

export const FeaturesWrapper = styled(FlexBox)`
  justify-content: space-between;
  width: 100%;
  height: 64px;
  margin-bottom: 16px;
  padding: 0 15px;
  background: linear-gradient(
    180deg,
    rgba(200, 42, 194, 0) -15.34%,
    rgba(200, 42, 194, 0.45) 100%
  );
  border-bottom: 2px solid #c82ac2;
`

export const NFTStatsWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  :not(:last-of-type) {
    margin-bottom: 20px;
  }
`
