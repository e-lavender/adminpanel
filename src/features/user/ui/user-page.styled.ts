import Image from 'next/image'
import { styled } from 'styled-components'

export const UserPageStyled = {
  Avatar: styled(Image)`
    margin: 24px;
    border-radius: 50%;
  `,
  Profile: styled.div`
    display: flex;
    flex-direction: row;
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
  UserName: styled.div`
    display: flex;
  `,
}
