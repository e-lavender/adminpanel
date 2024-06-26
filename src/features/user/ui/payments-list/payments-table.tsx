import React from 'react'

import { ROUTES } from '@/app/constants/routes'
import { UsersTableStyles } from '@/features/users/ui/users-table.styled'
import { User } from '@/shared/appolo-client/Schema.types'
import { Table } from '@/ui/common/table'
import { TableHeaderModel } from '@/ui/common/table/tabel-types'
import { Button } from '@flyingtornado06/ui-kit'
import Link from 'next/link'

export const PaymentsTable = ({
  columns,
  data,
}: {
  columns: TableHeaderModel[]
  data: Payments[]
}) => {
  const { TableBody, TableHead, TableHeadCell, TableRoot, TableRow } = PaymentsTableStyles

  return (
    <TableRoot>
      <TableHead>
        <TableRow>
          {columns.map(column => {
            return <TableHeadCell key={column.key}>{column.title}</TableHeadCell>
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.getPaymentsByUser.items.map((item, idx) => {
          return (
            <TableRow key={idx}>
              <Table.DataCell>{user.profile.id}</Table.DataCell>
              <Table.DataCell>{user.profile.userName}</Table.DataCell>

              <Table.DataCell>
                {new Date(user.profile.createdAt).toLocaleDateString('ru-RU')}
              </Table.DataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </TableRoot>
  )
}
