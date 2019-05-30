import React from 'react';
import './App.css';

export default class form extends React.Component
{
    state = {
        FirstName: '',
        LastName:'',
        Email:'',
        ContactNumber:'',
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
        FirstName: '',
        LastName:'',
        Email:'',
        ContactNumber:''

        });
  
};
     render()
    {
        return(
            <form>
                <input class = "textfields"
                name ="FirstName"
                placeholder = "First Name"
                value = {this.state.FirstName}
                onChange = {e => this.change(e)}/>
                <br />
                     <input class = "textfields"
                name ="LastName"
                placeholder = "Last Name"
                value = {this.state.LastName}
                onChange = {e => this.change(e)}/>
                <br />
                     <input class = "textfields"
                name ="Email" 
                placeholder = "Email Address"
                value = {this.state.Email}
                onChange = {e => this.change(e)}/>
                <br />
                     <input class = "textfields"
                name ="ContactNumber"
                type = "number"
                placeholder = "Contactnumber"
                value = {this.state.ContactNumber}
                onChange = {e => this.change(e)}/>
                <br />
                <button onClick = {e => this.onSubmit(e)}>Submit</button>
                </form>
        )
    }
}