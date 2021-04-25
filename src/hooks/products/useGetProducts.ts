import { gql, QueryResult, useQuery } from '@apollo/client';
import { IProduct } from '../../common/interfaces/product.interface';

const GET_PRODUCTS = gql`
  query GetProducts {
    productList {
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

export const useGetProducts = (): QueryResult => {
  const response = useQuery(GET_PRODUCTS);
  return response;
}
