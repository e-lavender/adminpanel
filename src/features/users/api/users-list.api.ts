import { gql } from '@apollo/client'

export const USERS = gql`
  query getAllUsers(
    $pageSize: Int!
    $pageNumber: Int!
    $sortBy: String!
    $sortDirection: SortDirection!
    $searchTerm: String!
    $statusFilter: UserBlockStatus! = ALL
  ) {
    getUsers(
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
      searchTerm: $searchTerm
      statusFilter: $statusFilter
    ) {
      pagination {
        page
        pagesCount
        pageSize
        totalCount
      }
      users {
        profile {
          createdAt
          aboutMe
          city
          dateOfBirth
          id
          lastName
          firstName
          userName
          avatars {
            fileSize
            height
            url
            width
          }
        }
      }
    }
  }
`
export const REMOVE_USER = gql`
  mutation RemoveUser($userId: Int!) {
    removeUser(userId: $userId)
  }
`
export const BAN_USER = gql`
  mutation BanUser($banReason: String!, $userId: Int!) {
    banUser(banReason: $banReason, userId: $userId)
  }
`
export const UNBAN_USER = gql`
  mutation UnbanUser($userId: Int!) {
    unbanUser(userId: $userId)
  }
`
