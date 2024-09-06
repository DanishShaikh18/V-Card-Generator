// src/App.js
import React from 'react';
import Header from './Componenets/Header';
import TitleContainer from './Componenets/TitleContainer';
import MainComponent from './Componenets/MainComponent';
import Footer from './Componenets/Footer';

function App() {
  return (
    <div
      className="App"
      style={{
        transform: 'scale(0.8)', // Scale down to 80%
        transformOrigin: 'top left', // Adjust the origin to keep it anchored
        width: '125%', // Adjust width to counter the scaling effect horizontally
        height: '125%', // Adjust height to counter the scaling effect vertically
        overflow: 'hidden' // Ensure no overflow from scaling
      }}
    >
      <div className="relative">
        <img
          src="/images/style_image.png"
          alt="Styling Decoration"
          style={{
            width: '100px',
            height: '540px',
            position: 'absolute',
            top: '190px',
            left: '0',
            transform: 'rotate(0)',
            zIndex: -1
          }}
          className="hidden lg:block"
        />
        <Header />
        <TitleContainer />
        <MainComponent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
