import './App.css';
import React, { useState } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Board from './components/Puzzle';

function App() {
  const puzzleSizes = ["4x4", "5x5", "6x6"];
  const [selectedSize, setSelectedSize] = useState(puzzleSizes[0]);

  return (
    <div className="App">
      <Header />
      <Navbar 
        selectedSize={selectedSize} 
        setSelectedSize={setSelectedSize} 
        puzzleSizes={puzzleSizes} 
      />
      <Board selectedSize={selectedSize}/>
    </div>
  );
}

export default App;
