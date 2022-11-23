import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import React, { Component } from 'react';
import Layout from './pages/Layout';
import Home from './components/Home';
import PokeList from './components/PokeList';
import About from './components/About';
import PokeSingle from './components/PokeSingle';

// Workaround for class components
const RouterWrapper = () => {
  const params = useParams();

  return <PokeSingle />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="pokelist" element={<PokeList />} />
            <Route path="pokelist/:pokesingle" element={<RouterWrapper />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
