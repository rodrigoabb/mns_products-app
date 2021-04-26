import React, { useState, useEffect} from 'react';

import ProductsGrid from '../../components/products-grid/products-grid.component';

import { IProduct } from '../../common/interfaces/product.interface';
import { IUser } from '../../common/interfaces/user.interface';
import { useGetProducts } from '../../hooks/products/useGetProducts';
import { useGetUser } from '../../hooks/users/useGetUser';

import './home.page.scss';

const USER_ID = "5";

const Home: React.FC = () => {

  const [ products, setProducts ] = useState<IProduct[]>([]);
  const [ user, setUser ] = useState<IUser>();
  const { data: productsData, loading: productsLoading, error: productsError} = useGetProducts();
  const { data: userData, loading: userLoading, error: userError} = useGetUser(USER_ID);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData.productList);
    }
  }, [productsData])

  useEffect(() => {
    if (userData) {
      setUser(userData.user);
    }
  }, [userData])

  if (productsLoading || userLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if ((!user || !products) || productsError || userError) {
    return (
      <div>
        <h4>Something has happened</h4>
        <p>{ productsError } </p>
        <p>{ userError } </p>
      </div>
    );
  }

  return (
    <div className="home">
      <ProductsGrid user={ user } products={ products || [] } />
    </div>
  );

}

export default Home;
