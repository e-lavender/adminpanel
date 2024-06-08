import { ProfileTabsStyled } from '@/features/user/ui/ProfileTabs/profile-tabs.styled'
import { Typography } from '@flyingtornado06/ui-kit'

export const ProfileTabs = () => {
  const { Container } = ProfileTabsStyled

  const tabsOptions = [
    {
      description: 'Uploaded photos',
      disabled: false,
      id: 1,
      value: 'Uploaded photos',
    },
    { description: 'Payments', disabled: false, id: 2, value: 'Payments' },
    {
      description: 'Followers',
      disabled: false,
      id: 3,
      value: 'Followers',
    },
    {
      description: 'Following',
      disabled: false,
      id: 4,
      value: 'Following',
    },
  ]

  return <Container></Container>
}
