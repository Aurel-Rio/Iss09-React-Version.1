import React from 'react';
import LeftImage from '../img/left-image.png';
import RightImage from '../img/right-image.png';
import { invertImages } from '../utils';

const HomePage = () => {
  return (
    <div>
      <img id="left-image" src={LeftImage} alt="Left Image" />
      <img id="right-image" src={RightImage} alt="Right Image" />
      <button onClick={invertImages}>Invert Images</button>
    </div>
  );
};

export default HomePage;
