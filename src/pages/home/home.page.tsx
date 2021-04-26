import React, { useState, useEffect} from 'react';

import ProductsGrid from '../../components/products-grid/products-grid.component';

import { IProduct } from '../../common/interfaces/product.interface';
import { useGetProducts } from '../../hooks/products/useGetProducts';

import './home.page.scss';


const Home: React.FC = () => {

  const [ products, setProducts ] = useState<IProduct[]>([]);
  const { data, loading, error} = useGetProducts();

  useEffect(() => {
    console.log('data: ', data);
    if (data) {
      setProducts(data.productList);
    }
  }, [data])

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h4>Something has happened</h4>
        <p>{ error } </p>
      </div>
    );
  }

  return (
    <div className="home">
      <ProductsGrid products={ products || [] } />
    </div>
  );
}

export default Home;
