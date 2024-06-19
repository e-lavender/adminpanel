import * as Types from '../../../shared/appolo-client/Schema.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUserByIdQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUser: { __typename?: 'User', profile: { __typename?: 'Profile', id: number, createdAt: any, firstName?: string | null, lastName?: string | null, userName?: string | null, avatars?: Array<{ __typename?: 'Avatar', url?: string | null, fileSize?: number | null, height?: number | null, width?: number | null }> | null } } };

export type GetAllPostsByUserQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int'];
  endCursorId?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetAllPostsByUserQuery = { __typename?: 'Query', getPostsByUser: { __typename?: 'PostsByUserModel', totalCount: number, pageSize: number, pagesCount: number, items?: Array<{ __typename?: 'ImagePost', id?: number | null, createdAt?: any | null, url?: string | null, width?: number | null, height?: number | null, fileSize?: number | null }> | null } };


export const GetUserByIdDocument = gql`
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
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAllPostsByUserDocument = gql`
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
    `;

/**
 * __useGetAllPostsByUserQuery__
 *
 * To run a query within a React component, call `useGetAllPostsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      endCursorId: // value for 'endCursorId'
 *   },
 * });
 */
export function useGetAllPostsByUserQuery(baseOptions: Apollo.QueryHookOptions<GetAllPostsByUserQuery, GetAllPostsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsByUserQuery, GetAllPostsByUserQueryVariables>(GetAllPostsByUserDocument, options);
      }
export function useGetAllPostsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsByUserQuery, GetAllPostsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsByUserQuery, GetAllPostsByUserQueryVariables>(GetAllPostsByUserDocument, options);
        }
export type GetAllPostsByUserQueryHookResult = ReturnType<typeof useGetAllPostsByUserQuery>;
export type GetAllPostsByUserLazyQueryHookResult = ReturnType<typeof useGetAllPostsByUserLazyQuery>;
export type GetAllPostsByUserQueryResult = Apollo.QueryResult<GetAllPostsByUserQuery, GetAllPostsByUserQueryVariables>;