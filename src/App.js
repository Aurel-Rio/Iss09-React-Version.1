import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyRoutes from '../src/Routes';
import './css/section_txt.css';
import iss09_facade from './img/iss09_facade05.png';
import perspective from './img/perspective02.png';
import backgtound_dark from './img/Background_iss09_DARK.png';


function App() {

  return (
      <div id="iss09App">
        <img id="img_shop_iss019" src={iss09_facade} alt="Image de la boutique Iss09"></img>
        <img id="background_black" src={backgtound_dark} alt="Image de la boutique Iss09"></img>
        {/*<img id="perspective_left" src={perspective} alt="Image de la boutique Iss09"></img>*/}

        <Navbar />
        <MyRoutes />
        <Footer />
      </div>
  );
}
export default App;