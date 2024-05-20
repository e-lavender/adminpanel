import React from 'react'

import { ROUTES } from '@/app/constants/routes'
import { User } from '@/shared/appolo-client/Schema.types'
import { Table } from '@/ui/common/table'
import { TableHeaderModel } from '@/ui/common/table/tabel-types'
import { Button } from '@flyingtornado06/ui-kit'
import Link from 'next/link'

export const UsersTable = ({ columns, data }: { columns: TableHeaderModel[]; data: User[] }) => {
  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          {columns.map(column => {
            return <Table.HeadCell key={column.key}>{column.title}</Table.HeadCell>
          })}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data?.map((user, idx) => {
          return (
            <Table.Row key={idx}>
              <Table.DataCell>{user.id}</Table.DataCell>
              <Table.DataCell>{user.userName}</Table.DataCell>
              <Table.DataCell>
                <Button as={Link} href={`${ROUTES.USER}${user.id}`} variant={'link'}>
                  {user.userName}
                </Button>
              </Table.DataCell>
              <Table.DataCell>
                {new Date(user.createdAt).toLocaleDateString('ru-RU')}
              </Table.DataCell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
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
