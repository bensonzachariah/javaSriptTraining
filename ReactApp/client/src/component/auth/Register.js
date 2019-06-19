import React from 'react'

const Register = props => {
    return (
        <div className="container">
            <form>
                <div class="text_fields">
                    <label class="header">First Name:
                    </label>
                    <input type="text" id="txtFname" name="firstname" className="text" placeholder="Your First Name" title="Please enter your First Name" />
                </div>

                <div class="text_fields">
                    <label class="header">Last Name:
                    </label>
                    <input type="text" id="txtLname" name="lastname" className="text" placeholder="Your Last Name" title="Please enter your Last Name" />
                </div>
                
                <div class="text_fields">
                    <label class="header">Phone Number:
                    </label>
                    <input type="number" id="txtPhn" name="txtPhn" className="text"  placeholder="Your Phone Number" title="Please enter Your Phone Number" />
                </div>

                <div class="text_fields">
                    <label class="header">Email Address: 
                    </label>
                    <input type="email" id="txtEmail" name="email" className="text"  placeholder="Mail@example.com" title="Please enter a Valid Email Address" />
                </div>

                <div class="text_fields">
                        <label class="header">Password:
                        </label>
                        <input type="Password" id="txtPassword" name="Password"  className="text" placeholder="Password" title="Please enter Password" />
                    </div>

                    <div class="text_fields">
                            <label class="header">comfirmPassword:
                            </label>
                            <input type="comfirmPassword" id="txtcomfirmPassword" name="comfirmPassword" className="text"  placeholder="comfirmPassword" title="Please enter a Valid Password" />
                        </div>
                <div class="text_fields last"></div>
                 <input type="submit" className="register" value="Register"/>
        </form>
    </div>
    )
}


export default Register