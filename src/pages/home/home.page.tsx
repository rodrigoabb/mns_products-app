import React, { useState, useEffect} from 'react';

import ProductsGrid from '../../components/products-grid/products-grid.component';

import { IProduct } from '../../common/interfaces/product.interface';
import { useGetProducts } from '../../hooks/products/useGetProducts';

import './home.page.scss';


const Home: React.FC = () => {

  const [ products, setProducts ] = useState<IProduct[]>([]);
  // const products = useGetProducts();
  const { data, loading, error} = useGetProducts();
  // const products = data.productList;

  useEffect(() => {
    console.log('data: ', data);
    if (data) {
      setProducts(data.productList);
    }
  }, [data])

  return (
    <div className="home">
      <ProductsGrid products={ products || [] } />
    </div>
  );
}

export default Home;
