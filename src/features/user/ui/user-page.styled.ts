import Image from 'next/image'
import { styled } from 'styled-components'
import { Typography } from '@flyingtornado06/ui-kit'

export const UserPageStyled = {
  Avatar: styled(Image)`
    margin: 24px;
    border-radius: 50%;
  `,
  Profile: styled.div`
    display: flex;
    align-items: center;
  `,
  ProfileInfo: styled.div`
    display: flex;
    flex-direction: row;
  `,
  UserInfo: styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px;
  `,
  UserName: styled.div``,
  Label: styled(Typography)`
    color: var(--color-light-900);
  `,
}
