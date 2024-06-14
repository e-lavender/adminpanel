import { ProfileTabsStyled } from '@/features/user/ui/ProfileTabs/profile-tabs.styled'
import { TABS_OPTIONS } from '@/features/user/ui/ProfileTabs/tabsOptions'
import { TabsContainer, TabsItem, TabsList } from '@flyingtornado06/ui-kit'
import { useRouter } from 'next/router'

export const ProfileTabs = () => {
  const { pathname, push } = useRouter()
  const { TabsItemStyled } = ProfileTabsStyled

  return (
    <TabsContainer defaultValue={pathname} onValueChange={route => push(route)}>
      <TabsList fullWidth>
        {TABS_OPTIONS.map(option => {
          return (
            <TabsItemStyled key={option.id} value={option.url}>
              {option.description}
            </TabsItemStyled>
          )
        })}
      </TabsList>
    </TabsContainer>
  )
}
