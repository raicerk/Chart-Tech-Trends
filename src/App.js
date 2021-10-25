import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router,  useLocation, useHistory } from "react-router-dom";

import api from './api';

import Header from './Header/Header';
import Home from './Home/Home';
import Section from './Section/Section';
import AppContext from './AppContext';
import Footer from './Footer/Footer';

import { countries } from './utils/countries';

import './App.scss';

function App() {
  const location = useLocation();
  const history = useHistory();

  const suggestedCountry = location.pathname.slice(1).toUpperCase();
  const [pais, setPais] = useState('');

  const handleSetPais = (country) => {
    setPais(country);
    history.push(`/${country.toLowerCase()}`);
  };

  useEffect(() => {
    const validCountryCodes = countries.map(country => country.value);
    const defaultCountryCode = countries[0].value;

    if (suggestedCountry && validCountryCodes.includes(suggestedCountry)) {
      handleSetPais(suggestedCountry);
      return;
    }

    api.pais().then(response => {
      const apiCountryCode = (response && response.data && response.data.country_code) || '';
      const countryCode = validCountryCodes.includes(apiCountryCode) ? apiCountryCode : defaultCountryCode;

      handleSetPais(countryCode);
    }).catch(() => {
      handleSetPais(defaultCountryCode);
    });
  }, []);

  return (
    <AppContext.Provider value={{
      pais: pais,
      setPais: handleSetPais
    }}>
      <div className="App">
        {pais && (
          <Fragment>
            <Header />
            <main>
              <Home />
              <Section />
            </main>
            <Footer />
          </Fragment>
        )}
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
