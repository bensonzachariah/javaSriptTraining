import React from 'react';
import './App.css';

export default class Login extends React.Component
{
    state = {
        UserName: '',
        Password:'',
    };

change = e => {
    this.setState ({
        [e.target.name]:e.target.value
    });
};

onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
    this.setState(
        {
        UserName: '',
        Password:'',
        });
  
};
 render()
    {
        return(
            <form>
                <div class = "login">

                    
                    <h1 class="loginhead">Login</h1>
                  
                    <br />
                 
                  {/*<div class="content">*/}
                    <div class = "div1 " >
                    <label>UserName</label></div> 
                    <br /> <br />
                    <input class = "textfields" type="text"
                    name ="UserName" value = {this.state.UserName}
                    onChange = {e => this.change(e)}/>
                    <br />
                    <br/>

             <div class = "div2" >
                   <label>Password</label></div>
                   <br /><br />
                <input class = "textfields"
                name ="Password"
                type="password"
                value = {this.state.Password}
                onChange = {e => this.change(e)}/>
                <br />
                <br/>
                     
                <button className="btn" onClick = {e => this.onSubmit(e)}>Login</button> <br /><br />
              

                <h3 class = "footer">Not yet a member? <a href="#" onClick={this.handleClick}>Register here!</a>
                 </h3> <br />
                
                </div>
               
                </form>

               
        );
    }
}
