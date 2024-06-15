import React, { useEffect, useMemo, useState } from 'react'

import { useGetAllUsersQuery } from '@/features/users/api/users-list.api.types'
import { FILTER_OPTIONS, USERS_TABLE_COLUMNS } from '@/features/users/constants'
import { UsersListStyled } from '@/features/users/ui/users-list.styled'
import { UsersTable } from '@/features/users/ui/users-table'
import { SortDirection, UserBlockStatus } from '@/shared/appolo-client/Schema.types'
import useDebounce from '@/shared/hooks/useDebounce'
import { Pagination } from '@/ui/common/pagination'
import { Loader, Select, TextField } from '@flyingtornado06/ui-kit'

export const UsersList = () => {
  const { Container, Filters, Table } = UsersListStyled
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [search, setSearch] = useState<string>('')
  const [filteredSearch, setFilteredSearch] = useState<string>('')
  const [filter, setFilter] = useState<UserBlockStatus>(UserBlockStatus.All)

  const { data, loading } = useGetAllUsersQuery({
    variables: {
      pageNumber: currentPage,
      pageSize: pageSize,
      searchTerm: filteredSearch,
      sortBy: 'createdAt',
      sortDirection: SortDirection.Asc,
      statusFilter: filter,
    },
  })

  const table = useMemo(
    () =>
      data?.getUsers.users && (
        // @ts-ignore
        <UsersTable columns={USERS_TABLE_COLUMNS} data={data?.getUsers.users} />
      ),
    [data?.getUsers.users]
  )

  useDebounce(
    () => {
      setFilteredSearch(search)
    },
    [search],
    800
  )
  useEffect(() => {
    data?.getUsers.pagination.totalCount && setTotalPages(data?.getUsers.pagination.totalCount)
  }, [data?.getUsers.pagination.totalCount])

  return (
    <Container>
      <Filters>
        <TextField inputType={'search'} onChange={e => setSearch(e.currentTarget.value)} />
        <Select
          onChange={value => setFilter(value as UserBlockStatus)}
          options={FILTER_OPTIONS}
          value={filter}
        />
      </Filters>
      <Table>{loading ? <Loader isLoading={loading} /> : table}</Table>
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
    </Container>
  )
}
