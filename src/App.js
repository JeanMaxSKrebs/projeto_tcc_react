import './App.css';
// import { useState, useEffect } from 'react'
import FormSalao from './components/Saloes/FormSalao';
import MostraSaloes from './components/Saloes/MostraSaloes';

function App() {
  return (
    <>
      <div className="App">
        <div className="saloes-header">
          <h1>Salões</h1>
        </div>
        <FormSalao />

        <MostraSaloes />

      </div>
    </>
  );
}

export default App;
