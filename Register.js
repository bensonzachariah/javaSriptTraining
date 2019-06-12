import React from 'react';
import './App.css';

export default class Register extends React.Component{
    state = {
        FirstName:'',
        LastName:'',
        UserName:'',
        DOB:'',
        Email:'',
        ContactNo:'',
        Password:'',
        ConfirmPassword:'',
        UploadPicture:'',
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
        FirstName:'',
        LastName:'',
        UserName:'',
        DOB:'',
        Email:'',
        ContactNo:'',
        Password:'',
        ConfirmPassword:'',
        UploadPicture:'',
        });
  
};
     render()
    {
        return(
            <form>
                <div class = "Register">
                <h1 class="registerhead">Create an Account</h1><br />
                 
                    
                    <input class = "text" type="text"
                    name ="FirstName" placeholder="FirstName" value = {this.state.FirstName}
                    onChange = {e => this.change(e)}/>
                    <br />
                    <br/>

                  
                <input class = "text"
                name ="LastName" placeholder="LastName"
                value = {this.state.LastName}
                onChange = {e => this.change(e)}/>
                <br />
                <br/>

                
                   
                <input class = "text"
                name ="UserName" placeholder="UserName"
                value = {this.state.UserName}
                onChange = {e => this.change(e)}/>
                <br />
                <br/>

                
                  
                <input class = "text"
                name ="DOB" placeholder="DOB"
                value = {this.state.DOB}
                onChange = {e => this.change(e)}/>
                <br />
                <br/>

                
                 
                <input class = "text"
                name ="Email" placeholder="Email" type="email"
                value = {this.state.Email}
                onChange = {e => this.change(e)}/>
                <br />
                <br/>

                <input class = "text"
                name ="ContactNo" placeholder="ContactNo"
                value = {this.state.ContactNo}
                onChange = {e => this.change(e)}/>
                <br />
                <br/>

                 <input class = "text"
                name ="Password" placeholder="Password"
                value = {this.state.Password}
                onChange = {e => this.change(e)}/>
                <br />
                <br/>

                 <input class = "text"
                name ="ConfirmPassword" placeholder="ConfirmPassword"
                value = {this.state.ConfirmPassword}
                onChange = {e => this.change(e)}/>
                <br />
                <br/>

                <div class = "file">Upload Image</div><br />
                <input class = "text"
                name ="UploadPicture" type = "file"
                value = {this.state.UploadPicture}
                onChange = {e => this.change(e)}/>
                <br />
                <br/>
                
                 
                <button className="btn1" onClick = {e => this.onSubmit(e)}>Register</button> <br /><br />
                 </div>
               
                </form>
        )
    }
}
