import React from 'react'

import { PAYMENTS_TABLE_COLUMNS } from '@/features/user/constants'
import { PaymentsListStyled } from '@/features/user/ui/payments-list/payments-list.styled'
import { UsersTable } from '@/features/users/ui/users-table'

export const PaymentsList = () => {
  const { Table } = PaymentsListStyled

  // @ts-ignore
  const table = <UsersTable columns={PAYMENTS_TABLE_COLUMNS} data={''} />

  return <Table>{table}</Table>
}
