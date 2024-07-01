import React, { useState } from 'react'

import { useGetPaymentsByIdQuery } from '@/features/user/api/user-page.api.types'
import { PAYMENTS_TABLE_COLUMNS } from '@/features/user/constants'
import { PaymentsListStyled } from '@/features/user/ui/payments-list/payments-list.styled'
import { PaymentsTable } from '@/features/user/ui/payments-list/payments-table'
import { SortDirection } from '@/shared/appolo-client/Schema.types'
import { Pagination } from '@/ui/common/pagination'
import { useRouter } from 'next/router'

export const PaymentsList = () => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)

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
