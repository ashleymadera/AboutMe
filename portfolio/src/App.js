import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="seperator"></div>
      <Route path='/'>
        <Main />
      </Route>
    </>
  );
}

export default App;
