import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import axios from 'axios';


function ImageSlider(props) {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products/popular/recommended/allmenu");
      setProduct(data);
    }
    fetchData();
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

    <Slider {...settings}>
      {

        products.map((popularObject, i) => (
          <li key={popularObject._id}>
            <div className="card-wrapper">

              <ul className="product">
                <div className="card">
                  <Link to={'/product/' + popularObject._id}>
                    <img className="card-image" src={
                      (typeof (popularObject.popular) == 'object') ?
                        <div>
                          {
                            popularObject.popular.map((subpopularObject, index) => {
                              <div key={index}>
                                {subpopularObject.imageUrl}
                              </div>
                            }
                            )
                          }
                        </div>
                        :
                        null
                    } alt="popular" />
                  </Link>

                  <div className="details">
                    <div className="job-title">
                      <h4><p className="tag">Radhunir Rannaghor</p><Link to={'/product/' + popularObject._id}>
                        {
                          (typeof (popularObject.popular) == 'object') ?
                            <div>
                              {
                                popularObject.popular.map((subpopularobj, index) =>

                                  <div key={index}>{subpopularobj.name}</div>
                                )
                              }
                            </div>
                            :
                            null
                        }

                      </Link><span className="job-title"></span> </h4>
                    </div>
                    <div className="job-title-price"> <h4> ${popularObject.popular[i].price}</h4></div>

                  </div>

                </div>
              </ul>
            </div>
          </li>

        ))}
    </Slider>


  )
}

export default ImageSlider
