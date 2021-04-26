import { gql, QueryResult, useQuery } from '@apollo/client';

const GET_PRODUCT = gql`
    query GetProduct($id: String!) {
      product(id: $id ) {
        id
        image_key
        name
        offer_ids
        price {
          currency_code
          current_price
          original_price
        }
        information {
          section_text
          section_title
        }
      }
    }
`

export const useGetProduct = (productId: string): QueryResult => {
  const response = useQuery(GET_PRODUCT, {
    variables: {
      id: productId
    }
  });
  return response;
}
