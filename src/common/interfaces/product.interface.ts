export interface IProduct {
  id: string,
  name: string,
  image_key: string,
  offer_ids: string[],
  price: {
    currency_code: string,
    current_price: number,
    original_price: number | null,
  },
  information: [
    {
      section_text: string,
    },
  ]
};
