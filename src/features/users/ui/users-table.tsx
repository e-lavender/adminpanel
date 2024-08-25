import React, { useState } from 'react'

import { ROUTES } from '@/app/constants/routes'
import {
  useBanUserMutation,
  useRemoveUserMutation,
} from '@/features/users/api/users-list.api.types'
import { UsersTableStyles } from '@/features/users/ui/users-table.styled'
import { User } from '@/shared/appolo-client/Schema.types'
import { CardDropdownMenu } from '@/shared/card-dropdown-menu'
import { ConfirmationModal } from '@/shared/card-dropdown-menu/confirmation-modal'
import { UserAllowActionType } from '@/shared/card-dropdown-menu/data'
import { useDisclose } from '@/shared/hooks/useDisclose'
import { Table } from '@/ui/common/table'
import { TableHeaderModel } from '@/ui/common/table/tabel-types'
import { Button } from '@flyingtornado06/ui-kit'
import Link from 'next/link'

export type HandlerType = {
  action: UserAllowActionType
  userId: number
  userName: string
}
export const UsersTable = ({ columns, data }: { columns: TableHeaderModel[]; data: User[] }) => {
  const { TableBody, TableHead, TableHeadCell, TableRoot, TableRow } = UsersTableStyles
  const { isOpen, onClose, onOpen } = useDisclose()
  const [userId, setUserId] = useState<number | undefined>(undefined)
  const [userName, setUserName] = useState<string>('')
  const [action, setAction] = useState<UserAllowActionType | undefined>(undefined)
  const [deleteUser] = useRemoveUserMutation()
  const [banUser] = useBanUserMutation()
  const functions: Record<string, () => void> = {
    ban: () => {
      userId && void banUser({ variables: { banReason: 'test', userId } })
    },
    delete: () => {
      userId &&
        deleteUser({ variables: { userId } })
          .then(res => {
            console.log('res', res)
          })
          .catch(err => {
            console.log('err', err)
          })
    },
  }

  const openModalHandler = ({ action, userId, userName }: HandlerType) => {
    if (action === 'info') {
      return
    }
    setAction(action)
    setUserId(userId)
    setUserName(userName)
    onOpen()
  }
  const closeModalHandler = () => {
    setAction(undefined)
    setUserId(undefined)
    setUserName('')
    onClose()
  }
  const onConfirmationHandler = () => {
    functions[action!]()
    closeModalHandler()
  }

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
                <Table.DataCell>
                  {user.userBan && '💀'}
                  {user.profile.id}
                </Table.DataCell>
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
                  <CardDropdownMenu
                    openModalHandler={openModalHandler}
                    userId={user.profile.id}
                    userName={user.profile.userName!}
                  />
                </Table.DataCell>
              </TableRow>
            )
          })}
        </TableBody>
      </TableRoot>
      <ConfirmationModal
        action={action}
        isOpen={isOpen}
        onClose={closeModalHandler}
        onConfirmation={onConfirmationHandler}
        translation={'deleteUser'}
        userName={userName}
      />
    </>
  )
}
