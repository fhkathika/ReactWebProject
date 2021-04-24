import React, { useEffect } from 'react';

import{Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    const productDetails= useSelector(state => state.productDetails);
    const {product,loading,error}=productDetails;
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
return () =>{
//
};
    },[])
    return <div>
      {loading ? <div>loading...</div>:
      error ?<div>{error}</div>:
      (
        <div className="Pro_details">
        <div className="Pro_details-image">
<img src={product.image} alt="product"/>
        </div>

    
   <div className="Pro_details-info">
<ul>
<li>
<h4> {product.name}</h4>
</li>
<li>
{product.rating} Stars ({product.numReviews}Reviews)
</li>
<li>
<b> {product.price}</b>
</li>
<li>
Description:
<div>
   {product.description}
</div>
</li>
</ul>
</div>
<div className="Pro_details-action">
<ul>
<li>
Price: {product.price}
</li>
<li>
Status: {product.price}
</li>
<li>
Qty:<select>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>

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
  
}

export default ProductScreen;