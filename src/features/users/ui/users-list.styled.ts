import { Pagination } from '@/ui/common/pagination'
import { styled } from 'styled-components'

export const UsersListStyled = {
  Container: styled.div`
    margin: 60px 24px 0;
    display: flex;
    flex-direction: column;
    height: 80vh;
  `,
  Filters: styled.div`
    column-gap: 30px;
    display: flex;
    flex: 0 0 auto;
  `,
  Pagination: styled(Pagination)`
    flex: 0 0 auto;
  `,
  Table: styled.div`
    margin-top: 24px;
    flex: 1 1 auto;
  `,
}
