import React from 'react';
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'
import pic1 from "./logo192.png"
import pic2 from "./logo512.png"
import pic3 from "./logoFinal.jpg"

const items = [pic1, pic2, pic3];

const MySliderComponent = () => {
  return (
    <Slider
      slideClass={'my-slider'}
      infinite={true}
      bullets={true}
      arrowsNav={true}
      animation={'scale'}
      callback={() => {
        console.log('here');
      }}
    >
      <div className='slider my-slider'>
        <ul className='slider-wrapper'>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item} alt={`Image ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </Slider>
  );
}

export default MySliderComponent;
