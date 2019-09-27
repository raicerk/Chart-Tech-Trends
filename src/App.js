import React from 'react';
import './App.css';
import CompHeader from './CompHeader';
import CompSection from './CompSection';
import Compform from './CompForm';

function App() {
  return (
    <div className="App">
      <Compform/>
      <CompHeader/>
      <CompSection/>
    </div>
  );
}

export default App;
