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
