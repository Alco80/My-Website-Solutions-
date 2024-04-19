import * as React from 'react'
import { Routes, Route } from 'react-router-dom';
// Components 
import Header from './components/Header';
import Footer from './components/Footer';

// Pages

import Home from './pages/Home';
import Solutions from './pages/Solutions';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="">
      <Header />

      </div>
      <div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route />
  <Route />
  <Route />
</Routes>
</div>
    </div>
  );
}

export default App;
