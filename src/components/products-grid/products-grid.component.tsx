import React from 'react';

import ProductsGridItem from './products-grid-item/products-grid-item.component';
import { Link } from 'react-router-dom';

import { IProduct } from '../../common/interfaces/product.interface';
import { IUser } from '../../common/interfaces/user.interface';

import './products-grid.component.scss';

interface IProductsGridProps {
  products: IProduct[],
  user: IUser;
};

const ProductsGrid: React.FC<IProductsGridProps> = ({ products, user }: IProductsGridProps ) => {
  const { offers: user_offers } = user;
  const { available_badges } = user;
  const available_badges_array = available_badges.split('||');

  const userBadgeObj: any = {};
  for (let i = 0; i < available_badges_array.length; i += 1) {
    const badge = available_badges_array[i];
    const name_n_types = badge.split(':');
    const name = name_n_types[0];
    const types = name_n_types[1].split(',');
    userBadgeObj[name] = types;
  }

  return (
    <ul className="products-grid">
      {
        products.map((product: IProduct) => {

          const { offer_ids: products_offer_ids } = product;
          const applicable_badges: any = [];

          for (let i = 0; i < user_offers.length; i += 1) {
            if (products_offer_ids.includes(user_offers[i].id)) {
              applicable_badges.push(user_offers[i].type);
            }
          }

          let badgeName: string | null = null;
          for (let key in userBadgeObj) {
            if (userBadgeObj[key].some((element: string) => applicable_badges.includes(element))) {
              badgeName = key;
              break;
            }
          }

          return (
            <li className="products-grid__item" key={ product.id }>
              <Link to={`product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                <ProductsGridItem product= { product } badge={ badgeName }/>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}

export default ProductsGrid;
