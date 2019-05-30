import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render()
  {
    return(
    <div class = "TextField">
      <table>
        <tr>
       <td> <label>FirstName</label></td>
       <input type= "text" Name = "FirstName"/>
       </tr>

       <tr>
       <td> <label>LastName</label></td>
       <input type= "text" Name = "LastName"/>
       </tr>
       
       <tr>
       <td> <label>EmailAddress</label></td>
       <input type= "text" Name = "EmailAddress"/>
       </tr>
      
       <tr>
       <td> <label>ContactNumber</label></td>
       <input type= "number" Name = "ContactNumber"/>
       </tr>

         <tr>
       <td> <label>UserName</label></td>
       <input type= "text" Name = "UserName"/>
       </tr>

       <tr>
       <td> <label>Password</label></td>
       <input type= "text" Name = "Password"/>
       </tr>
       </table>
       
 
      <a href = "#" onClick = {App1}>
      <input type = "submit" value = "Submit" class = "button"/>
      </a> 
    </div>
    );
  }
}
  let obj = {
  name:'Aryan',
  age:21
  }
  document.write('I am' + ' ' + obj.name + ' ' + 'and I am' + ' ' + obj.age + ' '+'years old') ;


  function App1() {
  return (
  alert('check once!!!!!'),
  document.write("Registered Successfully")
  
  );
  }

  export default App;



