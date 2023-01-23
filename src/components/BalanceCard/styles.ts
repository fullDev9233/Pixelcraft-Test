import styled from 'styled-components'
import FlexBox from '../Commons/FlexBox'

export const BalanceInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  width: 100%;
  height: 100%;
`

export const CollectionWrapper = styled(FlexBox)`
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(
    180deg,
    rgba(200, 42, 194, 0) 0%,
    rgba(200, 42, 194, 0.45) 93.23%
  );
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.border}`};
`

export const RemainingWrapper = styled(CollectionWrapper)`
  background: linear-gradient(
    180deg,
    rgba(105, 105, 105, 0) 0%,
    rgba(143, 118, 142, 0.45) 93.23%
  );
  border-bottom: 2px solid #b9b9b9;
`
