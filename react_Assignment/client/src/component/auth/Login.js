import React from 'react'
import PropTypes from 'prop-types'

const Login = props => {
    return (
        <div className="container">
        <form>
             <div class="text_fields">
                <label class="header">Email Address:
                </label>
                <input type="email" id="txtEmail" name="email"  className="text" placeholder="Mail@example.com" title="Please enter a Valid Email Address" />
            </div>

             <div class="text_fields">
                <label class="header">Password:
                </label>
                <input type="Password" id="txtPassword" name="Password"  className="text" placeholder="Password" title="Please enter  Password" />
            </div>
         
            <div class="text_fields last"></div>
              <input type="submit" className="Login" value="Login"/>
        </form>
    </div>
    )
}

Login.propTypes = {

}

export default Login