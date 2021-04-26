import { gql, QueryResult, useQuery } from '@apollo/client';

const GET_USER = gql`
    query GetUser($id: String!) {
      user(id: $id ) {
        id
        available_badges
        offers {
          id
          title
          type
        }
      }
    }
`

export const useGetUser = (userId: string): QueryResult => {
  const response = useQuery(GET_USER, {
    variables: {
      id: userId
    }
  });
  return response;
}
