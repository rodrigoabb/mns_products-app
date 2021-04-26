import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { IProduct } from '../../common/interfaces/product.interface';
import { useGetProduct } from '../../hooks/products/useGetProduct';
import { COMMON_CURRENCIES } from '../../common/utils/common-currency';
import { getImageUrl } from '../../common/utils/helperFunctions';

import './product-details.page.scss';

interface RouterProps {
  productId: string;
}

interface TopicDetailProps extends RouteComponentProps<RouterProps> {

}

const ProductDetails: React.FC<TopicDetailProps> = ({ match }) => {

  const [ productData, setProductData ] = useState<IProduct | undefined>();
  const { data, loading, error} = useGetProduct(match.params.productId);

  useEffect(() => {
    if (data) {
      setProductData(data.product);
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

  if (!productData) {
    return (
      <h4>No data available</h4>
    );

  } else {
    const ccy_sym = COMMON_CURRENCIES[productData.price.currency_code]?.symbol || '£';

    return (
      <div className="product-details">
        <div className="card">
          <div className="product-image">
            <img src={ getImageUrl(productData.image_key) } alt={ productData.name }/>
          </div>
          <div className="info-container">
            <div className="title">{ productData.name }</div>
            <h4 className="subtitle">Description</h4>
            <div className="content">
              <span className="information">{ productData.information[0].section_text }</span>
            </div>
            <br />
            {/* <h4 className="subtitle">Price</h4> */}
            <div className="price">
              {
                productData.price.original_price && <span className="original-price"> { `${ccy_sym} ${ productData.price.original_price}` }</span>
              }
              <span className="current-price">{`${ccy_sym} ${ productData.price.current_price}`}</span>
            </div>
          </div>
        </div>
        <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit'}}>
          <button className="return-button">
            &#8249; Go Back
          </button>
        </Link>
      </div>
    );
  }
};

export default withRouter(ProductDetails);
