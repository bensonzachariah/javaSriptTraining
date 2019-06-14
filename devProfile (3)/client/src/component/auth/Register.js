import React from 'react'

const Register = () => {
    return (
        <div className="container">
            <form className="form-group" >

                <label for="exampleInputfn"> First Name: </label>
                <input type="textbox" id="exampleInputfn" name="FirstName" className="form-control" placeholder="First Name" />
                <br />

                <label for="exampleInputln"> Last Name: </label>
                <input type="textbox" id="exampleInputln" name="LastName" className="form-control" placeholder="Last Name" />
                <br />

                <label for="exampleInputEmail1">Email: </label>
                <input type="email" id="exampleInputEmail1" name="email" className="form-control" placeholder="name@softvision.com" />
                <br />

                <label for="exampleInputpwd">Password: </label>
                <input type="password" id="exampleInputpwd" name="password" className="form-control" />
                <br />

                <label for="exampleInputpwd1">Confirm Password:</label>
                <input type="password" id="exampleInputpwd1" name="password" className="form-control" />
                <br />

                <input type="submit" className="btn btn-primary" value="Register here" />

            </form>

        </div>
    )
}

export default Register
