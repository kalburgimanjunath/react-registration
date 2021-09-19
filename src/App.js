import React from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
