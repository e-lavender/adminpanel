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
