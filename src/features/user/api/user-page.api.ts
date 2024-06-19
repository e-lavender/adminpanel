import { gql } from '@apollo/client'

export const USER = gql`
  query getUserById($userId: Int!) {
    getUser(userId: $userId) {
      profile {
        id
        createdAt
        firstName
        lastName
        userName
        avatars {
          url
          fileSize
          height
          width
        }
      }
    }
  }
`
export const POSTS_BY_USER = gql`
  query getAllPostsByUser($userId: Int!, $endCursorId: Int) {
    getPostsByUser(userId: $userId, endCursorId: $endCursorId) {
      totalCount
      pageSize
      pagesCount
      items {
        id
        createdAt
        url
        width
        height
        fileSize
      }
    }
  }
`
