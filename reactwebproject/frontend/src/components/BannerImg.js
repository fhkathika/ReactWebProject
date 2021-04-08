import React from 'react';
import Banner from 'react-js-banner';

export default function BannerImg({children,bannerimg}) {
    return  <header className={bannerimg}>{children}</header>;

}



BannerImg.defaultProps={
    bannerimg:"roomsBannerImg"
};


// const BannerImg= ({ children, bannerimg }) => {
//     return <header className={bannerimg}>{children}</header>;
//   };
  
//   export default BannerImg;
  
//   BannerImg.defaultProps = {
//     hero: "roomsBannerImg"
//   };