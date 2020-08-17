import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import { Route } from 'react-router-dom'
import Nav from './components/Nav';

function App() {
  return (
    <>
      <title>Ashley</title>
      <Route path='/'>
        <div className="App">
          <Nav />
          <Header />
          <Main />
        </div>
      </Route>
    </>
  );
}

export default App;
