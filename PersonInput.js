import React from 'react';
import axios from "axios";

export default class PersonInput extends React.Component
{
    state = {
        name:'',
       // id:0,  //for delete
    };

    handleChange = event => {
        this.setState({ name:event.target.value});
    };

    //  handleChange = event => {                          //to delete
    //     this.setState({ id:event.target.value});
    // };

    handleSubmit = event => {
        event.preventDefault(); //to prevent reloading the page

        const user = {
            name: this.state.name, //creating an object   //not required for delete opr
        };

        axios
        .post(`https://jsonplaceholder.typicode.com/users`, {user}) //post with api and passing along with the obj and can be replaced with put
        //.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    };

    render()
    {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Person Name:
                   {/*Person id:      */}
                    <input type = "text" name = "name" onChange = {this.handleChange} />
                    {/*<input type = "number" name = "id" onChange = {this.handleChange} />*/}
                    </label>
                    <button type = "submit">Add</button>
                    {/*<button type = "submit">Delete</button>*/} 
                </form>
        )
        
    }
}