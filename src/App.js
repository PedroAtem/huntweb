import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import api from './services/api';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
