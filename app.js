import React, {Component} from 'react'


export default class demo extends React.Component
{
render(){
  return(
    <div>
      <table>
        <tr>
          <td> 
           <label>firstname</label></td>
            <input type="text" name="firstname"/>
       </tr>
       <tr>
          <td> 
           <label>lastname</label></td>
            <input type="text" name="lastname"/>
       </tr>
        <tr>
          <td><label>phone number</label></td>
          <input type="number" name="phonenumber"/>
          </tr>
        </table>
        <a href="#" onClick={App}><input type="btn" name="submit"/>
        </a>
    </div>
  )
}
}


function App()
{
  return (
    alert("hello"),
    document.getElementById("register successfully")
  )
}