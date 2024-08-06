import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../shared/appolo-client/Schema.types'
const defaultOptions = {} as const

export type GetAllUsersQueryVariables = Types.Exact<{
  pageNumber: Types.Scalars['Int']
  pageSize: Types.Scalars['Int']
  searchTerm: Types.Scalars['String']
  sortBy: Types.Scalars['String']
  sortDirection: Types.SortDirection
  statusFilter?: Types.UserBlockStatus
}>

export type GetAllUsersQuery = {
  __typename?: 'Query'
  getUsers: {
    __typename?: 'UsersPaginationModel'
    pagination: {
      __typename?: 'PaginationModel'
      page: number
      pageSize: number
      pagesCount: number
      totalCount: number
    }
    users: Array<{
      __typename?: 'User'
      profile: {
        __typename?: 'Profile'
        aboutMe?: null | string
        avatars?: Array<{
          __typename?: 'Avatar'
          fileSize?: null | number
          height?: null | number
          url?: null | string
          width?: null | number
        }> | null
        city?: null | string
        createdAt: any
        dateOfBirth?: any | null
        firstName?: null | string
        id: number
        lastName?: null | string
        userName?: null | string
      }
    }>
  }
}

export type RemoveUserMutationVariables = Types.Exact<{
  userId: Types.Scalars['Int']
}>

export type RemoveUserMutation = { __typename?: 'Mutation'; removeUser: boolean }

export type BanUserMutationVariables = Types.Exact<{
  banReason: Types.Scalars['String']
  userId: Types.Scalars['Int']
}>

export type BanUserMutation = { __typename?: 'Mutation'; banUser: boolean }

export type UnbanUserMutationVariables = Types.Exact<{
  userId: Types.Scalars['Int']
}>

export type UnbanUserMutation = { __typename?: 'Mutation'; unbanUser: boolean }

export const GetAllUsersDocument = gql`
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

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *      searchTerm: // value for 'searchTerm'
 *      statusFilter: // value for 'statusFilter'
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options)
}
export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options
  )
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>
export const RemoveUserDocument = gql`
  mutation RemoveUser($userId: Int!) {
    removeUser(userId: $userId)
  }
`
export type RemoveUserMutationFn = Apollo.MutationFunction<
  RemoveUserMutation,
  RemoveUserMutationVariables
>

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveUserMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveUserMutation, RemoveUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(
    RemoveUserDocument,
    options
  )
}
export type RemoveUserMutationHookResult = ReturnType<typeof useRemoveUserMutation>
export type RemoveUserMutationResult = Apollo.MutationResult<RemoveUserMutation>
export type RemoveUserMutationOptions = Apollo.BaseMutationOptions<
  RemoveUserMutation,
  RemoveUserMutationVariables
>
export const BanUserDocument = gql`
  mutation BanUser($banReason: String!, $userId: Int!) {
    banUser(banReason: $banReason, userId: $userId)
  }
`
export type BanUserMutationFn = Apollo.MutationFunction<BanUserMutation, BanUserMutationVariables>

/**
 * __useBanUserMutation__
 *
 * To run a mutation, you first call `useBanUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBanUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [banUserMutation, { data, loading, error }] = useBanUserMutation({
 *   variables: {
 *      banReason: // value for 'banReason'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useBanUserMutation(
  baseOptions?: Apollo.MutationHookOptions<BanUserMutation, BanUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<BanUserMutation, BanUserMutationVariables>(BanUserDocument, options)
}
export type BanUserMutationHookResult = ReturnType<typeof useBanUserMutation>
export type BanUserMutationResult = Apollo.MutationResult<BanUserMutation>
export type BanUserMutationOptions = Apollo.BaseMutationOptions<
  BanUserMutation,
  BanUserMutationVariables
>
export const UnbanUserDocument = gql`
  mutation UnbanUser($userId: Int!) {
    unbanUser(userId: $userId)
  }
`
export type UnbanUserMutationFn = Apollo.MutationFunction<
  UnbanUserMutation,
  UnbanUserMutationVariables
>

/**
 * __useUnbanUserMutation__
 *
 * To run a mutation, you first call `useUnbanUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnbanUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unbanUserMutation, { data, loading, error }] = useUnbanUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnbanUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UnbanUserMutation, UnbanUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<UnbanUserMutation, UnbanUserMutationVariables>(
    UnbanUserDocument,
    options
  )
}
export type UnbanUserMutationHookResult = ReturnType<typeof useUnbanUserMutation>
export type UnbanUserMutationResult = Apollo.MutationResult<UnbanUserMutation>
export type UnbanUserMutationOptions = Apollo.BaseMutationOptions<
  UnbanUserMutation,
  UnbanUserMutationVariables
>
