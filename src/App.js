import React, { useState } from 'react';
import './App.scss';
import Header from './Header/Header';
import Home from './Home/Home';
import Section from './Section/Section';
import AppContext from './AppContext';
import Footer from './Footer/Footer';

function App() {

  const [pais, handleSetPais] = useState("CL")

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

export default App;
