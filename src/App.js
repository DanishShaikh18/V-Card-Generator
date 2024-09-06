// src/App.js
import React from 'react';
import Header from './Componenets/Header'
import TitleContainer from './Componenets/TitleContainer'
import MainComponent from './Componenets/MainComponent'
import Footer from './Componenets/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Container for positioning the styling image */}
      <div className="relative">
        {/* Desktop-only Styling Image */}
        <img
          src="/images/style_image.png" // Ensure this path is relative to the public directory
          alt="Styling Decoration"
          style={{
            width: '100px',
            height: '540px', // Adjust height calculation to fit new top position
            position: 'absolute',
            top: '190px', // Increase this value to push the image container lower
            left: '0', // Fixed to the left side
            transform: 'rotate(0)', // Rotation transformation
            zIndex: -1 // Ensures it stays in the background
          }}
          className="hidden lg:block" // Ensure this is only visible on larger screens
        />

        <Header />
        <TitleContainer />
       
        <MainComponent />
        {/* Other components like the button and QR code box will go here */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
