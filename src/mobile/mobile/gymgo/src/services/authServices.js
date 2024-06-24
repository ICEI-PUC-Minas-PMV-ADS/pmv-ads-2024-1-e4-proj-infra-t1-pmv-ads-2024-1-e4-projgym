import axios from 'axios';
//import { useNavigation } from '@react-navigation/native';
//const navigation = useNavigation()

// export async function resgister(name, email, password, confirmPassword) {
//    const result = await axios.post('http://localhost:5174/users/register', {
//        name: name, 
//        email: email,
//        password: password, 
//        confirmPassword: confirmPassword 
//        }
//    )   
//    return result;
// } 


export function userRegister(name, email, password, confirmPassword) {
    return axios.post("http://192.168.0.101:3333/users/register", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    })
}

export async function userlogin(email, password) {
    return await axios.post("http://192.168.0.101:3333/users/login", {
        email: email,
        password: password,
    })
}
