import React, { useState } from 'react';
import { BrowserRouter as Router,  useLocation } from "react-router-dom";

import Header from './Header/Header';
import Home from './Home/Home';
import Section from './Section/Section';
import AppContext from './AppContext';
import Footer from './Footer/Footer';

import { countries } from './utils/countries';

import './App.scss';

function App() {
  const location = useLocation();

  const suggestedCountry = location.pathname.slice(1).toUpperCase();
  const country = countries.map(country => country.value).includes(suggestedCountry) ? suggestedCountry : 'CL';
  const [pais, handleSetPais] = useState(country);

  return (
    <AppContext.Provider value={{
      pais: pais,
      setPais: handleSetPais
    }}>
      <div className="App">
        <Header />
        <main>
          <Home />
          <Section />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
