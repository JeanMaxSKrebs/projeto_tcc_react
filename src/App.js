import './App.css';
// import { useState, useEffect } from 'react'
import FormSalao from './components/Saloes/FormSalao';
import MostraSaloes from './components/Saloes/MostraSaloes';
import TopNav from './components/Estrutura/TopNav';
import SideNav from './components/Estrutura/SideNav';

function App() {
  return (
    <>
      <TopNav />
      <SideNav />
      <div className="App">
        <div className="saloes-header">
          <h1>Salões</h1>
        </div>

        {/* <FormSalao /> */}

        <MostraSaloes />

      </div>
    </>
  );
}

export default App;
