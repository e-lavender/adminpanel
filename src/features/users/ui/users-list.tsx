import React, { useState } from 'react'

import { useGetAllUsersQuery } from '@/features/users/api/users-list.api.types'
import { USERS_TABLE_COLUMNS } from '@/features/users/constants'
import { UsersTable } from '@/features/users/ui/users-table'
import { SortDirection, UserBlockStatus } from '@/shared/appolo-client/Schema.types'
import { Pagination } from '@/ui/common/pagination'

export const UsersList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  const { data } = useGetAllUsersQuery({
    variables: {
      pageNumber: currentPage,
      pageSize: pageSize,
      searchTerm: '',
      sortBy: 'createdAt',
      sortDirection: SortDirection.Asc,
      statusFilter: UserBlockStatus.All,
    },
  })

  return (
    <div>
      <div>
        {data?.getUsers.users.map(user => {
          return <div key={user.profile.id}>{user.profile.id}</div>
        })}
        {data?.getUsers.users && (
          // @ts-ignore
          <UsersTable columns={USERS_TABLE_COLUMNS} data={data?.getUsers.users} />
        )}
      </div>
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
        totalCount={100}
      />
    </div>
  )
}
