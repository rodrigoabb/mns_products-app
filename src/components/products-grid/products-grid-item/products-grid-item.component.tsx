import React from 'react';

import { IProduct } from '../../../common/interfaces/product.interface';

import './products-grid-item.component.scss';

const ProductsGridItem: React.FC<{ product: IProduct }> = ({ product }: { product: IProduct}) => {
  return (
    <div className="products-grid-item">
      <p>{ product.id }</p>
      <p>{ product.name }</p>
    </div>
  );
}

export default ProductsGridItem;
