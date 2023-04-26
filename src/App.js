import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyRoutes from './Routes';

function App() {
  return (
      <div id="iss09App">
        <Navbar />
        <MyRoutes />
        <Footer />
      </div>
  );
}

export default App;