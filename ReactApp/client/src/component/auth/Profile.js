import React from 'react'
const Profile = props => {
    return (
        <div className="container">
        <form>
		
                 <div className="form-group">
                    <label className="header">Education: 
                    </label>
                    <select type="dropdown" className="text">
                        <option value="Bachelor_Degree" >Bachelor_Degree</option>
                        <option value="Diploma">Diploma</option>
                        <option value="PUC">PUC</option>
                        <option value="SSLC">SSLC</option>
                    </select>
                </div> 

                  <div className="form-group">
                    <label className="header">profession: 
                    </label>
                    <select type="dropdown" className="text">
                        <option value="Web" >Web developer</option>
                        <option value=".Net">CEO</option>
                        <option value="Java">Manager</option>
                        <option value="React">Product</option>
                        <option value="Python">Finance</option>
                        <option value="MVC">>net developer</option>
                        <option value="Testing">Test Engineer</option>  
                    </select>
                </div>
         
                 <div className="form-group">
                    <label className="header">Country: 
                    </label>
                    <select type="dropdown" className="text">
                        <option value="INDIA" >INDIA</option>
                        <option value="USA">USA</option>
                        <option value="Russia">Russia</option>
                        <option value="England">England</option>
                    </select>
                </div> 

                <div className="form-group">
                    <label className="header">State:
                    </label>
                      <select type="dropdown" className="text">
                       <option value="Karnataka">Karnataka</option>
                       <option value="Kerala">Kerala</option>
                       <option value ="Rajasthan">Rajasthan</option>
                       <option value ="California">California</option>
                       <option value ="NewYork">NewYork</option>
                       <option value ="Moscow">Moscow</option>
                   </select>
                </div> 
 
            

                <div className="form-group">
                <label className = "header">City</label>
                <select type="dropdown" className="text">
                <option value="Mysore">Mysore</option>
                <option value="bangalore">bangalore</option>
                <option value="NewYork">NewYork</option> 
                <option value="LosAngel">LosAngel</option> 
                <option value="Moscow">Moscow</option> 
                </select></div>

                    <div className="form-group">
                    <label className="header">Zip Code:
                    </label>
                    <input type="number" id="txtZip" name="zip"  className="text"  placeholder="Zip Code" title="Please enter your Zip Code" />
                   </div>


                <div className="form-group">
                    <label className="header">Skills: 
                    </label>
                    <textarea rows="4" cols="120">
                    </textarea>
                </div>

                <div className="text_fields last"></div>
                 <input type="submit" className="profile" value="Profile"/>
        </form>
    </div>
    )
}

export default Profile
