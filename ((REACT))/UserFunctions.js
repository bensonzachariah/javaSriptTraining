import axios from 'axios'

//const endPoint = 'http://localhost:9000';

export const register = user => {
    return axios
    .post('/users/register',
    {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password:user.password,
    }

)

    .then(res => {
        console.log("Registered")
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}
