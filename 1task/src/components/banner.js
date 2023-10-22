import React from 'react';
import ImgBanner from '../assets/images/banner.jpeg';

import '../assets/css/banner.css';

function Banner() {
  const banner = {
    // We must use image here
    backgroundImage: `url(${ImgBanner})`, 
    backgroundSize: 'cover',
    height: '150px',
  };

  return (
    <div className="banner" style={banner}>
      <div className='row'>
      <div className='col-2'></div>
       <div className='col-8' style={{fontWeight : "bold" , fontSize : "40px", color: "white" , justifyContent: "center", marginTop: "50px"}}> 
          <span> Newsfeed </span>
            <p className="minposts"style={{fontWeight : "bold" , fontSize : "15px", color: "white" , justifyContent: "center", marginTop: "0"}}>Check what your friends have benn up to!</p>
          </div>
       <div className='col-2'></div>
       </div>
    </div>
  );
}

export default Banner;
