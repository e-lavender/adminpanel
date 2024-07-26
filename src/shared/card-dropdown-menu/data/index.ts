import { HomeMenuIcon } from '@flyingtornado06/ui-kit/dist/assets'

export const MENU: DropdownMenuType = {
   [
    {
      action: 'delete',
      icon: '',
      label: 'Delete User',
    },
    {
      action: 'ban',
      icon: '',
      label: 'Ban in the system',
    },
    {
      action: 'more info',
      icon: '',
      label: 'More Information',
    },
  ],
}

export type DropdownMenuItemType = {
  action: keyof typeof ActionTypes
  icon: SVGIconType
  label: string
}
export type DropdownMenuType = {
  []: Array<DropdownMenuItemType>
}
export const ActionTypes = {
  copy: 'copy',
  delete: 'delete',
  edit: 'edit',
  follow: 'follow',
  report: 'report',
  unfollow: 'unfollow',
} as const

export type SVGIconType = typeof HomeMenuIcon