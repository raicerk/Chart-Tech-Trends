import React, { Component } from 'react';
import './App.css';
import CompHeader from './CompHeader';
import CompSection from './CompSection';
import AppContext from './AppContext'

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
          <CompSection />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
