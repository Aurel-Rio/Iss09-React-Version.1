import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import Forfaits from './components/Forfaits';
import Assistance from './components/Assistance';
import Depannage from './components/Depannage';
import Deplacement from './components/Deplacement';
import Contact from './components/Contact';


function App() {
  return (
    <div id="iss09App">
      <Navbar />
      <Accueil />
      <Forfaits />
      <Assistance />
      <Depannage />
      <Deplacement />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
