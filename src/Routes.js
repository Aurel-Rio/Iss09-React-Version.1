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
      <Route exact path="/" component={Accueil} />
      <Route exact path="/forfaits" component={Forfaits} />
      <Route exact path="/assistance" component={Assistance} />
      <Route exact path="/depannage" component={Depannage} />
      <Route exact path="/deplacement" component={Deplacement} />
      <Route exact path="/contact" component={Contact} />
    </Routes>
  );
}

export default MyRoutes;