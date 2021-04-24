import React from 'react';

import ProductsGrid from '../../components/products-grid/products-grid.component';

import { IProduct } from '../../common/interfaces/product.interface';

import './home.page.scss';


const Home: React.FC = () => {

  const products: IProduct[] = [
    {
      id: '1',
      name: 'Product 1',
    },
    {
      id: '2',
      name: 'Product 2',
    },
  ];

  return (
    <div className="home">
      <ProductsGrid products={ products } />
    </div>
  );
}

export default Home;
