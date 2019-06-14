import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/layout/Navbar'
import Landing from './component/layout/Landing'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import ProfileUpdate from './component/auth/ProfileUpdate'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/profile" component={ProfileUpdate} />
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

      </Router>
    </div>
  );
}

export default App;
