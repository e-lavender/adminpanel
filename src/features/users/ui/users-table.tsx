import React from 'react'

import { ROUTES } from '@/app/constants/routes'
import {
  useBanUserMutation,
  useRemoveUserMutation,
} from '@/features/users/api/users-list.api.types'
import { UsersTableStyles } from '@/features/users/ui/users-table.styled'
import { User } from '@/shared/appolo-client/Schema.types'
import { CardDropdownMenu } from '@/shared/card-dropdown-menu'
import { ConfirmationModal } from '@/shared/card-dropdown-menu/confirmation-modal'
import { useDisclose } from '@/shared/hooks/useDisclose'
import { Table } from '@/ui/common/table'
import { TableHeaderModel } from '@/ui/common/table/tabel-types'
import { Button } from '@flyingtornado06/ui-kit'
import Link from 'next/link'

export const UsersTable = ({ columns, data }: { columns: TableHeaderModel[]; data: User[] }) => {
  const { TableBody, TableHead, TableHeadCell, TableRoot, TableRow } = UsersTableStyles
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const [deleteUser] = useRemoveUserMutation()
  const [banUser] = useBanUserMutation()

  return (
    <>
      <TableRoot>
        <TableHead>
          <TableRow>
            {columns.map(column => {
              return <TableHeadCell key={column.key}>{column.title}</TableHeadCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((user, idx) => {
            return (
              <TableRow key={idx}>
                <Table.DataCell>{user.profile.id}</Table.DataCell>
                <Table.DataCell>{user.profile.userName}</Table.DataCell>
                <Table.DataCell>
                  <Button as={Link} href={`${ROUTES.USER}${user.profile.id}`} variant={'link'}>
                    {user.profile.userName}
                  </Button>
                </Table.DataCell>
                <Table.DataCell>
                  {new Date(user.profile.createdAt).toLocaleDateString('ru-RU')}
                </Table.DataCell>
                <Table.DataCell>
                  <Button variant={'link'}>
                    <CardDropdownMenu />
                  </Button>
                </Table.DataCell>
              </TableRow>
            )
          })}
        </TableBody>
      </TableRoot>
      <ConfirmationModal
        isOpen={isModalOpened}
        onClose={closeModal}
        onConfirmation={() => {}}
        translation={'deleteUser'}
      />
    </>
  )
}

// const HeadCell = ({
//                       sortable,
//                       onClick,
//                       sort,
//                       columnKey,
//                       title,
//                       className,
//                       ...props
//                   }: HeadCellProps) => {
//     const style = {
//         th: clsx(s.headCell, !sortable && s.noSort, className),
//         title: clsx(s.title),
//         icon: clsx(s.sortDscIcon, sort?.direction === 'asc' && s.sortAscIcon),
//     }
//     const showSortIcon = sort?.columnKey === columnKey && sort?.direction
//
//     const handleClick = () => {
//         if (onClick && columnKey) {
//             onClick(columnKey)
//         }
//     }
//
//     return (
//         <th className={style.th} {...props} onClick={handleClick}>
//             <div className={style.title}>
//                 <Typography variant={'regular-14'}>{title}</Typography>
//                 <div className={style.icon}>{showSortIcon && <ArrowDownIcon />}</div>
//             </div>
//         </th>
//     )
// }
// const Head = ({ columns, sort, onSort, className, ...rest }: HeadProps) => {
//     const handlerSort = (key: string, sortable?: boolean) => {
//         if (!onSort || !sortable) return
//
//         if (key !== sort?.columnKey) {
//             return onSort({ columnKey: key, direction: 'asc' })
//         }
//         if (sort.direction === 'asc') {
//             return onSort({ columnKey: key, direction: 'desc' })
//         }
//
//         onSort(null)
//     }
//     const styles = { head: clsx(s.head, className) }
//
//     return (
//         <thead className={styles.head} {...rest}>
//         {columns.map(col => {
//             const handler = () => {
//                 handlerSort(col.key, col.sortable)
//             }
//
//             return (
//                 <HeadCell
//                     sort={sort}
//                     title={col.title}
//                     onClick={handler}
//                     key={col.key}
//                     columnKey={col.key}
//                     sortable={col.sortable}
//                 />
//             )
//         })}
//         </thead>
//     )
// }
