import { ProfileTabsStyled } from '@/features/user/ui/ProfileTabs/profile-tabs.styled'
import { TABS_OPTIONS } from '@/features/user/ui/ProfileTabs/tabsOptions'
import { TabsContainer, TabsItem, TabsList } from '@flyingtornado06/ui-kit'
import { useRouter } from 'next/router'

export const ProfileTabs = () => {
  const { pathname, push } = useRouter()
  const { TabsItemStyled } = ProfileTabsStyled

  const options = TABS_OPTIONS.map(option => {
    return (
      <TabsItem key={option.id} value={option.url}>
        {option.description}
      </TabsItem>
    )
  })

  return (
    <TabsContainer defaultValue={pathname} onValueChange={route => push(route)}>
      <TabsList fullWidth>{options}</TabsList>
    </TabsContainer>
  )
}
