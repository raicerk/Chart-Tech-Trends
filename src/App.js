import React, { Component } from 'react';
import './App.css';
import CompHeader from './CompHeader';
import CompSection from './CompSection';
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
          <CompHeader />
          <main>
            <CompSection />
            <Footer />
          </main>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
