import { useGetUserByIdQuery } from '@/features/user/api/user-page.api.types'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Typography } from '@flyingtornado06/ui-kit'
import { UserPageStyled } from '@/features/user/ui/user-page.styled'

export const UserPage = () => {
  const { Avatar, Profile, UserName, UserInfo, ProfileInfo } = UserPageStyled
  const router = useRouter()
  const userId = Number(router.query.id)
  const { data, loading } = useGetUserByIdQuery({
    skip: !router.query.id,
    variables: {
      userId,
    },
  })

  const avatars = data?.getUser?.profile?.avatars

  return (
    <div>
      <Profile>
        {avatars && avatars[0]?.url && (
          <Avatar alt={'avatar'} height={60} src={avatars[0].url} width={60} />
        )}
        <UserName>
          <Typography variant={'h1'}>{data?.getUser?.profile?.firstName}</Typography>
          <Typography variant={'h1'}>{data?.getUser?.profile?.lastName}</Typography>
        </UserName>
      </Profile>
      <ProfileInfo>
        <UserInfo>
          <Typography variant={'regular-14'}>UserID</Typography>
          <Typography variant={'regular-14'}>{data?.getUser?.profile?.id}</Typography>
        </UserInfo>
        <UserInfo>
          <Typography variant={'regular-14'}>Profile Creation Date</Typography>
          <Typography variant={'regular-14'}>{data?.getUser?.profile?.createdAt}</Typography>
        </UserInfo>
      </ProfileInfo>
    </div>
  )
}