import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Route, Link }  from "react-router-dom";

class App extends Component{
state ={
  fields:{}
};

  onSubmit = fields => {
    this.setState({fields});
  };

 
   
    
render()
 {
   return (

    <Router>
      <div>
        <nav>
          <ul>
            <li><Link class="registerh" to="/register/">Register</Link></li>
            <li><Link class="loginh" to="/login/">Login</Link></li>
          </ul>
        </nav>
         <Route exact path="/register/" component={Register} />
        <Route path="/login/" component={Login} />
      
       <h1 class = "title">  Welcome to <br />
        Dev Connect</h1>
      </div>

      
    </Router>
  
    );
 }
}


 
export default App;
