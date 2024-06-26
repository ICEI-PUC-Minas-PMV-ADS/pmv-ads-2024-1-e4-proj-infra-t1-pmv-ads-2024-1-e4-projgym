import axios from "axios"

export async function userupdate(name, email, password, confirmPassword) {
    const response = await axios.post("http://192.168.0.101:3333/users/edit", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    })
    return (response.status == 200)
}

export async function userhistory(user_id, exercise_id) {
    const response = await axios.post("http://192.168.0.101:3333/users/edit", {
        user_id: user_id,
        exercise_id: exercise_id
    })
    return (response.status == 200)
}

export function getUserById(id){
    return axios.get(`http://192.168.0.101:3333/users/${id}`)
}

