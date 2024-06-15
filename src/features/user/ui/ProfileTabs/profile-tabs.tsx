import { ProfileTabsStyled } from '@/features/user/ui/ProfileTabs/profile-tabs.styled'
import { TABS_OPTIONS } from '@/features/user/ui/ProfileTabs/tabsOptions'
import { TabsContainer, TabsList } from '@flyingtornado06/ui-kit'
import { useRouter } from 'next/router'

export const ProfileTabs = () => {
  const router = useRouter()
  const { TabsItemStyled } = ProfileTabsStyled

  return (
    <TabsContainer defaultValue={router.pathname} onValueChange={route => router.push(route)}>
      <TabsList fullWidth>
        {TABS_OPTIONS.map(option => {
          return (
            <TabsItemStyled
              key={option.id}
              value={option.url(router.query.id && router.query.id[0])}
            >
              {option.description}
            </TabsItemStyled>
          )
        })}
      </TabsList>
    </TabsContainer>
  )
}
