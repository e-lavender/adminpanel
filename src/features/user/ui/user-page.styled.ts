import { Typography } from '@flyingtornado06/ui-kit'
import Image from 'next/image'
import { styled } from 'styled-components'

export const UserPageStyled = {
  Avatar: styled(Image)`
    //margin: 24px;
    border-radius: 50%;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 360px;
    padding: 10px;
    row-gap: 15px;
  `,
  Label: styled(Typography)`
    color: var(--color-light-900);
  `,
  Profile: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 19px;
  `,
  ProfileInfo: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  UserInfo: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  UserName: styled.div``,
}
