import axios from "axios"

export function userRegister(name, email, password, confirmPassword) {
    return axios.post("http://localhost:3333/users/register", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }, {
        headers: { 'Content-Type': 'application/json' }
    })
}

export async function userlogin(email, password) {
    console.log("entrei")
    const response = await axios.post("http://192.168.100.67:3333/users/login", {
        email: email,
        password: password,
    })
    return (response.status === 200)
}


