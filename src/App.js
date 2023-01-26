import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Character from './views/Character';
import Data from './views/Data';
import './App.css';

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Character pokemonData={pokemonData} setPokemonData={setPokemonData} />} />
          <Route path="/pokemon/:name" element={<Data pokemonData={pokemonData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
