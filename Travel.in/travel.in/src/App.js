import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/';
import Booking from './components/Booking';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/booking" component={Booking}/>
    <Route path="/contacts" component={Contacts}/>
    </>
  );
}

export default App;
