import { UserBlockStatus } from '@/shared/appolo-client/Schema.types'
import { TableHeaderModel } from '@/ui/common/table/tabel-types'

export const USERS_TABLE_COLUMNS: TableHeaderModel[] = [
  {
    key: 'id',
    sortable: false,
    title: 'User ID',
  },
  {
    key: 'userName',
    sortable: true,
    title: 'User Name',
  },
  {
    key: 'profileLink',
    sortable: false,
    title: 'Profile Link',
  },
  {
    key: 'createdAt',
    sortable: true,
    title: 'Date Added',
  },
]

export const FILTER_OPTIONS = [
  { label: 'Blocked', value: UserBlockStatus.Blocked },
  { label: 'Not Blocked', value: UserBlockStatus.Unblocked },
  { label: 'Not Selected', value: UserBlockStatus.All },
]
