import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal'

const App = () => {

  const [ state, setState ] = useState({
    isOpen: false,
    count: 0,
    name: 'ok'
  })

  const handleOpen = () => {
    setState({
      ...state,
      isOpen: !state.isOpen
    })
  }

  const handleAdd = () => {
    setState({
      ...state,
      count: state.count + 1
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => handleOpen()}>모달</button>
        <Modal value={state}/>

        <button onClick={() => handleAdd()}>+</button>
      </header>
    </div>
  );
}

export default App;
