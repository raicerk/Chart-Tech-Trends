import React, { Component } from 'react';
import './App.css';
import CompHeader from './CompHeader';
import CompSection from './CompSection';

export const myFirstContext = React.createContext({
  pais: 3,
  setPais: () => { }
})

class App extends Component {

  state = {
    pais: 0
  }

  handleSetPais = (Pais) => {
    this.setState({ pais: Pais })
  }

  render() {

    return (
      <div className="App">
        <myFirstContext.Provider value={{ 
          pais: this.state.pais,
          setPais: this.handleSetPais
         }}></myFirstContext.Provider>
        <CompHeader />
        <CompSection />
      </div>
    );
  }
}

export default App;
