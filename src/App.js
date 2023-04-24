import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyRoutes from './Routes';

function App() {
  return (
    <Router>
      <div id="iss09App">
        <Navbar />
        <MyRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;