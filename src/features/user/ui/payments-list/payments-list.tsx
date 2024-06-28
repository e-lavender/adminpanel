import React, { useState } from 'react'

import { useGetPaymentsByIdQuery } from '@/features/user/api/user-page.api.types'
import { PAYMENTS_TABLE_COLUMNS } from '@/features/user/constants'
import { PaymentsListStyled } from '@/features/user/ui/payments-list/payments-list.styled'
import { UsersTable } from '@/features/users/ui/users-table'
import { SortDirection } from '@/shared/appolo-client/Schema.types'
import { useRouter } from 'next/router'
import { PaymentsTable } from '@/features/user/ui/payments-list/payments-table'
import { Pagination } from '@/ui/common/pagination'

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
  const table = <PaymentsTable columns={PAYMENTS_TABLE_COLUMNS} data={data} />

  console.log(data)

  return (
    <>
      <Table>{table}</Table>
      <Pagination
        currentPage={currentPage}
        onPageChange={page => {
          setCurrentPage(page)
        }}
        onPageSizeChange={pageSize => {
          setPageSize(+pageSize)
        }}
        pageSize={pageSize}
        siblingCount={3}
        totalCount={totalPages}
      />
    </>
  )
}
