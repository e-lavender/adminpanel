import React from 'react'

import { Table } from '@/ui/common/table'
import { TableHeaderModel } from '@/ui/common/table/tabel-types'

import { PaymentsTableStyles } from '@/features/user/ui/payments-list/payments-table.styled'
import { GetPaymentsByIdQuery } from '@/features/user/api/user-page.api.types'

export const PaymentsTable = ({
  columns,
  data,
}: {
  columns: TableHeaderModel[]
  data: GetPaymentsByIdQuery | undefined
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
        {data?.getPaymentsByUser?.items.map((item, idx) => {
          return (
            <TableRow key={idx}>
              <Table.DataCell>{item.dateOfPayment}</Table.DataCell>
              <Table.DataCell>{item.endDate}</Table.DataCell>
              <Table.DataCell>{item.price}</Table.DataCell>
              <Table.DataCell>{item.type}</Table.DataCell>
              <Table.DataCell>{item.paymentType}</Table.DataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </TableRoot>
  )
}
