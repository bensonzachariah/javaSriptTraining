import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Layout/Navbar'
import Landing from './component/Layout/Landing'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Profile from './component/auth/Profile'
import Welcome from './component/auth/Welcome'
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/welcome" component={Welcome} />

      </Router>
    </div>
  );
}

export default App;