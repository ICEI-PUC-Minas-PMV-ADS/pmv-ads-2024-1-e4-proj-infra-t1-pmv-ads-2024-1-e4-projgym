import axios from "axios";
import { useNavigate } from "react-router-dom";

export async function userRegister(name, email, password, confirmPassword) {
    try {
        const res = await axios.post("http://localhost:3333/users/register",
            {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }, { headers: { 'Content-Type': 'application/json' } });

        if (res.status === 201 || res.status === 204 || res.status === 200) {
            return { success: true, message: "Registro bem-sucedido!" };
        }

    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { success: false, message: "Usuário ou senha incorretos." };
        } else {
            console.error("Erro ao fazer registro:", error);
            return { success: false, message: "Não foi possível realizar o cadastro. Tente novamente mais tarde." };
        }
    }
}

//
export async function userlogin(email, password) {
    console.log("entrei")
    const response = await axios.post("localhost:3333/users/login", {
        email: email,
        password: password,
    })
    return (response.status === 200)
}


