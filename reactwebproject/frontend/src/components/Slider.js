import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../actions/productActions';

function ImageSlider(props) {

  // const [products, setProduct] = useState([]);
  const productList=useSelector (state => state.productList);
  const {products,loading,error}= productList;
const dispatch= useDispatch();
 useEffect(() => {
  dispatch(listProducts());

    return () => {

    };
  }, [])
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
  }


  return (
    loading ? <div>Loading..</div> :
    error ? <div>{error}</div> :
    <div>
      {
        products.map((popularObject,i) => (
          // <li key={popularObject._id}>
          <div key={i}>
            {
              (typeof (popularObject.popular) == 'object') ?
                <Slider {...settings}>

                  {
                    popularObject.popular.map((subpopularobj,k) =>
                      <div key={k} className="card-wrapper"  >
                        <ul className="product">
                          <div className="card">
                            <div className="card-image" key={k}>
                              <Link to={'/product/' + subpopularobj._id}>
                                <img src={subpopularobj.imageUrl} alt="popular" />
                              </Link>
                            </div>

                            <div className="details">
                              <div className="job-title">
                                <h4><p className="tag">Radhunir Rannaghor</p><Link to={'/product/' + subpopularobj._id}>

                                  {subpopularobj.name}
                                </Link><span className="job-title"></span> </h4>
                              </div>
                              <div className="job-title-price"> <h4> $  {subpopularobj.price}</h4></div>
                            </div>

                            <div className="job-title-price"> <h4> $  {subpopularobj.price}</h4></div>


                          </div>
                        </ul>
                      </div>

                    )

                  }


                </Slider>
                :
                null

            }



          </div>
          // </li>

        ))}
    </div>


  )
}


export default ImageSlider
