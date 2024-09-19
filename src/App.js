import React from 'react';
import { Footer, Possibility, Features, Whatgptx, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Whatgptx />
    <Features />
    <Possibility />
    <CTA />
    <Footer />
  </div>
);

export default App;
