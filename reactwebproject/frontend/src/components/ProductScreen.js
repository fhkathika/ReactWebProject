import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [])
  return <div>
    {loading ? <div>loading...</div> :
      error ? <div>{error}</div> :
        (
          <div  >
            {
              (typeof (product.popular) === 'object') ?
                <div   >
                  {
                    product.popular.map((popu, k) =>
                      <div key={k} className="Pro_details">
                        <div className="Pro_details-image" >
                          <img src={popu.imageUrl} alt="product" />
                        </div>
                        <div key={popu._id} className="Pro_details-info">
                          <ul >
                            <li >
                              <h4   > {popu.name}</h4>
                            </li>

                            <li>
                              <b> {popu.price}</b>
                            </li>
                            <li>
                              Description:
<div>
                                {popu.description}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="Pro_details-action">
                          <ul>
                            <li>
                              Price: {popu.price}
                            </li>
                            <li>
                              Status: {popu.price}
                            </li>
                            <li>
                              Qty:<select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                {[...Array(popu.countInStock).keys()].map(x =>
                                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                                )}

                              </select>
                            </li>
                            <li>
                              <button> Add to Cart</button>
                            </li>
                          </ul>
                        </div>
                      </div>


                    )
                  }




                </div>
                :
                null
            }
          </div>
        )
    }

  </div>

}

export default ProductScreen;