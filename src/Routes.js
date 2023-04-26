import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Forfaits from './components/Forfaits';
import Assistance from './components/Assistance';
import Depannage from './components/Depannage';
import Deplacement from './components/Deplacement';
import Contact from './components/Contact';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/forfaits" element={<Forfaits />} />
      <Route path="/assistance" element={<Assistance />} />
      <Route path="/depannage" element={<Depannage />} />
      <Route path="/deplacement" element={<Deplacement />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default MyRoutes;