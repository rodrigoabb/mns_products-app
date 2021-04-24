import React from 'react';

import ProductsGridItem from './products-grid-item/products-grid-item.component';

import { IProduct } from '../../common/interfaces/product.interface';

import './products-grid.component.scss';

interface IProductsGridProps {
  products: IProduct[],
};


const ProductsGrid: React.FC<IProductsGridProps> = ({ products }: IProductsGridProps ) => {
  return (
    <div className="products-grid">
      {
        products.map((product: IProduct) => (
          <div key={ product.id }>
            <ProductsGridItem product= { product }/>
          </div>
        ))
      }
    </div>
  );
}

export default ProductsGrid;
