import React from 'react';

import { IProduct } from '../../../common/interfaces/product.interface';
import { COMMON_CURRENCIES } from '../../../common/utils/common-currency';
import { getImageUrl } from '../../../common/utils/helperFunctions';

import './products-grid-item.component.scss';

const ProductsGridItem: React.FC<{ product: IProduct }> = ({ product }: { product: IProduct}) => {

  const ccy_sym = COMMON_CURRENCIES[product.price.currency_code]?.symbol || '£';

  return (
    <div className="products-grid-item">
      <div className="card">
        <img src={ getImageUrl(product.image_key) } alt={ product.name }/>
        <div className="info-container">
          <div className="name">{ product.name }</div>
          <div className="price">
            {
              product.price.original_price && <span className="original-price"> { `${ccy_sym} ${ product.price.original_price}` }</span>
            }
            <span className="current-price">{`${ccy_sym} ${ product.price.current_price}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsGridItem;
