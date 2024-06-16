import { ProfileTabsStyled } from '@/features/user/ui/ProfileTabs/profile-tabs.styled'
import { TABS_OPTIONS } from '@/features/user/ui/ProfileTabs/tabsOptions'
import { TabsContainer, TabsList } from '@flyingtornado06/ui-kit'
import { useRouter } from 'next/router'

export const ProfileTabs = () => {
  const router = useRouter()
  const { TabsItemStyled } = ProfileTabsStyled
  const id = router.query.id && router.query.id[0]
  const currentUrl = router.query.id && router.query.id[1]

  return (
    <TabsContainer
      defaultValue={`/user/${id}/uploadedPhotos`}
      onValueChange={route => router.push(route)}
    >
      <TabsList fullWidth>
        {TABS_OPTIONS.map(option => {
          return (
            <TabsItemStyled
              data-state={currentUrl === option.name ? 'active' : 'inactive'}
              disabled={option.disabled}
              key={option.id}
              value={option.url(id)}
            >
              {option.description}
            </TabsItemStyled>
          )
        })}
      </TabsList>
    </TabsContainer>
  )
}
