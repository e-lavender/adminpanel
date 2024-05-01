import { MenuItem } from '@/ui/common/menu-item'
import { SideBarMenuWithItemsStyles } from '@/ui/common/sidebar-menu-with-items/sidebar-menu-with-items.styled'
import { menuItemsData } from '@/ui/common/sidebar-menu-with-items/sidebar-menu-with-items-data'

export const SidebarMenuWithItems = () => {
  const { SidebarMenu } = SideBarMenuWithItemsStyles

  return (
    <SidebarMenu>
      <div>
        {menuItemsData.map(el => {
          return <MenuItem href={el.href} icon={el.icon} key={el.id} label={el.title} />
        })}
      </div>
    </SidebarMenu>
  )
}
