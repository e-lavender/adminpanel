import * as Types from '../../../shared/appolo-client/Schema.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAllUsersQueryVariables = Types.Exact<{
  pageSize: Types.Scalars['Int'];
  pageNumber: Types.Scalars['Int'];
  sortBy: Types.Scalars['String'];
  sortDirection: Types.SortDirection;
  searchTerm: Types.Scalars['String'];
  statusFilter?: Types.UserBlockStatus;
}>;


export type GetAllUsersQuery = { __typename?: 'Query', getUsers: { __typename?: 'UsersPaginationModel', users: Array<{ __typename?: 'User', profile: { __typename?: 'Profile', createdAt: any, aboutMe?: string | null, city?: string | null, dateOfBirth?: any | null, id: number, lastName?: string | null, firstName?: string | null, avatars?: Array<{ __typename?: 'Avatar', fileSize?: number | null, height?: number | null, url?: string | null, width?: number | null }> | null } }> } };


export const GetAllUsersDocument = gql`
    query getAllUsers($pageSize: Int!, $pageNumber: Int!, $sortBy: String!, $sortDirection: SortDirection!, $searchTerm: String!, $statusFilter: UserBlockStatus! = ALL) {
  getUsers(
    pageSize: $pageSize
    pageNumber: $pageNumber
    sortBy: $sortBy
    sortDirection: $sortDirection
    searchTerm: $searchTerm
    statusFilter: $statusFilter
  ) {
    users {
      profile {
        createdAt
        aboutMe
        city
        dateOfBirth
        id
        lastName
        firstName
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
    `;

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
export function useGetAllUsersQuery(baseOptions: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;