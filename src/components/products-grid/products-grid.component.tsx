import React from 'react';

import ProductsGridItem from './products-grid-item/products-grid-item.component';
import { Link } from 'react-router-dom';

import { IProduct } from '../../common/interfaces/product.interface';

import './products-grid.component.scss';

interface IProductsGridProps {
  products: IProduct[],
};


const ProductsGrid: React.FC<IProductsGridProps> = ({ products }: IProductsGridProps ) => {

  return (
    <ul className="products-grid">
      {
        products.map((product: IProduct) => (
          <li className="products-grid__item" key={ product.id }>
            <Link to={`product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
              <ProductsGridItem product= { product }/>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default ProductsGrid;
