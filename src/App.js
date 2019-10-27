import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Section from './Section/Section';
import AppContext from './AppContext';
import Footer from './Footer/Footer';

class App extends Component {

  state = {
    pais: "CL"
  }

  handleSetPais = (Pais) => {
    this.setState({ pais: Pais })
  }

  render() {

    return (
      <AppContext.Provider value={{ 
        pais: this.state.pais,
        setPais: this.handleSetPais
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
}

export default App;
