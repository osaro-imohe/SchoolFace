import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from './Components/Pages/SignUp.js';
import Login from './Components/Pages/Login.js';
import Dashboard from './Components/Pages/Dashboard.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route exact path = '/signup' component={SignUp}/>
          <Route exact path = '/login' component={Login}/>
          <Route exact path ='/dashboard' component={Dashboard}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
