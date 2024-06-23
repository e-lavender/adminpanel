import React, { useState } from 'react'

import { PAYMENTS_TABLE_COLUMNS } from '@/features/user/constants'
import { PaymentsListStyled } from '@/features/user/ui/payments-list/payments-list.styled'
import { UsersTable } from '@/features/users/ui/users-table'
import { SortDirection } from '@/shared/appolo-client/Schema.types'
import { useGetPaymentsByIdQuery } from '@/features/user/api/user-page.api.types'
import { useRouter } from 'next/router'

export const PaymentsList = () => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  const { Table } = PaymentsListStyled
  const { query } = useRouter()
  const userId = Number(query.id && query.id[0])
  const { data, loading } = useGetPaymentsByIdQuery({
    skip: !userId,
    variables: {
      pageNumber,
      pageSize,
      sortBy: 'createdAt',
      sortDirection: SortDirection.Asc,
      userId,
    },
  })

  // @ts-ignore
  const table = <UsersTable columns={PAYMENTS_TABLE_COLUMNS} data={data?.getPaymentsByUser.items} />

  return <Table>{table}</Table>
}
