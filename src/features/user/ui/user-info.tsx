import { useGetUserByIdQuery } from '@/features/user/api/user-page.api.types'
import { BackToPrevious } from '@/features/user/ui/BackToPrevious/back-to-previous'
import { UserInfoStyled } from '@/features/user/ui/user-info.styled'
import { Typography } from '@flyingtornado06/ui-kit'
import { useRouter } from 'next/router'

export const UserInfo = () => {
  const { Avatar, Container, Label, Name, Profile, ProfileInfo, UserInfo, UserName } =
    UserInfoStyled
  const router = useRouter()
  const userId = Number(router.query.id && router.query.id[0])
  const { data, loading } = useGetUserByIdQuery({
    skip: !router.query.id,
    variables: {
      userId,
    },
  })

  const avatars = data?.getUser?.profile?.avatars

  return (
    <>
      <BackToPrevious />
      <Container>
        <Profile>
          {avatars && avatars[0]?.url && (
            <Avatar alt={'avatar'} height={60} src={avatars[0].url} width={60} />
          )}
          <UserName>
            <Name>
              <Typography variant={'h1'}>{data?.getUser?.profile?.firstName + ' '}</Typography>
              <Typography variant={'h1'}>{data?.getUser?.profile?.lastName}</Typography>
            </Name>
            <Typography>{data?.getUser?.profile?.userName}</Typography>
          </UserName>
        </Profile>
        <ProfileInfo>
          <UserInfo>
            <Label variant={'regular-14'}>UserID</Label>
            <Typography variant={'regular-14'}>{data?.getUser?.profile?.id}</Typography>
          </UserInfo>
          <UserInfo>
            <Label variant={'regular-14'}>Profile Creation Date</Label>
            <Typography variant={'regular-14'}>
              {new Date(data?.getUser?.profile?.createdAt).toLocaleDateString('ru-RU')}
            </Typography>
          </UserInfo>
        </ProfileInfo>
      </Container>
    </>
  )
}
