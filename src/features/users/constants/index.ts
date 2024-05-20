import { TableHeaderModel } from '@/ui/common/table/tabel-types'

export const USERS_TABLE_COLUMNS: TableHeaderModel[] = [
  {
    key: 'userId',
    sortable: false,
    title: 'User ID',
  },
  {
    key: 'userName',
    sortable: false,
    title: 'User Name',
  },
  {
    key: 'profileLink',
    sortable: false,
    title: 'Profile Link',
  },
  {
    key: 'dateAdded',
    sortable: false,
    title: 'Date Added',
  },
]
