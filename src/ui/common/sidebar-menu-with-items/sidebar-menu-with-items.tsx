export const SidebarMenuWithItems = () => {
  const onSignOut = () => {
    signOut()

    // void push(authNavigationUrls.main())
  }

  return (
    <>
      <SidebarMenu>
        <MenuItem
          href={menuNavigation.search()}
          icon={SearchMenuIcon}
          isSelected={pathname.startsWith(menuNavigation.search())}
          label={labels.search}
        />
        <MenuItem disabled href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} />
      </SidebarMenu>
    </>
  )
}
