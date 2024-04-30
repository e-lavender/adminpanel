import { SidebarMenu } from '@/ui/common/sidebar-menu'
import { menuItemsData } from '@/ui/common/sidebar-menu-with-items/sidebar-menu-with-items-data'
import { MenuItem } from '@/ui/common/menu-item'

export const SidebarMenuWithItems = () => {
  return (
    <>
      <SidebarMenu>
        <div>
          {menuItemsData.map(el => {
            return <MenuItem href={el.href} key={el.id} label={el.title} icon={el.icon} />
          })}
        </div>
      </SidebarMenu>
    </>
  )
}
