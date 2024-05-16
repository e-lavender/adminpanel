import { gql } from '@apollo/client'

export const SIGN_IN_ADMIN = gql`
  mutation loginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      logged
    }
  }
`
