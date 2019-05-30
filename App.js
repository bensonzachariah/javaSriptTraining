import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render()
  {
    return(
      <div class = "TextFields">
    <table>
        <tr>
     <td> <label>FirstName</label></td>
       <input type= "text" Name = "First"/>
       </tr>

       <tr>
       <td> <label>LastName</label></td>
       <input type= "text" Name = "First"/>
       </tr>
       
       <tr>
       <td> <label>EmailAddress</label></td>
       <input type= "text" Name = "First"/>
       </tr>
      
      <tr>
       <td> <label>ContactNumber</label></td>
       <input type= "number" Name = "First"/>
       </tr>
       </table>
       
 
  <a href = "#" onClick = {App1}>


<input type = "submit" value = "Submit" class = "btn"/>
</a> 
    </div>
      
 
    );

  }
}
var obj = {
  name:'Chandana_Acharya',
  age:22
}
document.write('She is' + ' ' + obj.name + ' ' + 'and she is' + ' ' + obj.age + 'years old') ;


function App1() {
  return (
alert('Check here'),
document.write("Registered Successfully")
  
  );
}


export default App;



