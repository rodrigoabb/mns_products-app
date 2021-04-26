export interface IProduct {
  id: string,
  name: string,
  image_key: string,
  price: {
    currency_code: string,
    current_price: number,
    original_price: number | null,
  }
};
