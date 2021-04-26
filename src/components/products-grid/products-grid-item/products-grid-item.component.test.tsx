import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductsGridItem from './products-grid-item.component';
import { IProduct } from '../../../common/interfaces/product.interface';

const mockedProductDetail: IProduct = {
  id: "2",
  image_key: "TEST_IMG_KEY",
  name: "TEST_PRODUCT_NAME",
  offer_ids: [
    "2",
    "3",
    "5",
    "4"
  ],
  price: {
    currency_code: "GBP",
    current_price: 1250,
    original_price: 1400
  },
  information: [
    {
      section_text: "SOME_TEXT",
    },
  ]
};

const mockedBadge: string = 'sale';


describe('<ProductsGridItem>', () => {
  it('Should display a product detail item', () => {
    render(
      <ProductsGridItem product={ mockedProductDetail } badge={ mockedBadge }/>
    );
    expect(screen.queryByText(`${mockedProductDetail.name}`)).toBeTruthy();
  });
});
