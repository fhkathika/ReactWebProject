import React from 'react';
import BannerImg from '../components/BannerImg'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom';
import Item1 from '../components/Item1';
import Slider from '../components/Slider'
import ImageSlider from '../components/Slider';
import CategoryList  from '../components/CategoryList'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import Account from './Account';

import data from '../data';
 
export default function home(){

  return(
   <div>
<BannerImg>
  <Banner  
 title="A Welcome Refresh" 
   subtitle="New wardrobeessentials you're destined to fall in love with.Shop textured knits, work-from-home favorites, and seasonal silhouettes."
  >
    {/* <button onClick={this.Categorylist} ></button> */}
 
   
 Category
 {/* </Link>  */}
  </Banner>
</BannerImg>


<div className="container mt-5 carousel">
            <h1>item1</h1>
            
            <ImageSlider/>

                <h1>Item 2</h1>
             <ImageSlider/>
            
        </div>
</div>

  );
}

// const Home = () => {
//     return (
//       <>
//         <BannerImg >
//      <Banner title="A Welcome Refresh" subtitle="New wardrobe essentials you're destined to fall in love with. Shop textured knits, work-from-home favorites, and seasonal silhouettes.">
// <Link to="/Account" className="btn-primary">
//   Category
//   </Link>
//        </Banner>
//         </BannerImg>
    
    
//       </>
//     );
//   }
  
//   export default Home;

 



// function Home() {
//     return <BannerImg banner="roomsBannerImg"/>
// }

// export default Home;
