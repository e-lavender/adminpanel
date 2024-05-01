import { MenuItem } from '@/ui/common/menu-item'
import { SidebarMenu } from '@/ui/common/sidebar-menu'
import { menuItemsData } from '@/ui/common/sidebar-menu-with-items/sidebar-menu-with-items-data'

export const SidebarMenuWithItems = () => {
  return (
    <>
      <SidebarMenu>
        <div>
          {menuItemsData.map(el => {
            return <MenuItem href={el.href} icon={el.icon} key={el.id} label={el.title} />
          })}
        </div>
      </SidebarMenu>
    </>
  )
}
