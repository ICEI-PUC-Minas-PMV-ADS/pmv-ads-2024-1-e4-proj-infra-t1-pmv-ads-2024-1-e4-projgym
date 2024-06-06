import './login.css'
import Button from './button.jsx'
import { userRegister } from '../services/userServices.js';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
    const [message, setMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleCriar = async (event) => {
        event.preventDefault();
        console.log(event.target.name.value)
        const result = await userRegister(
            event.target.name.value,
            event.target.email.value,
            event.target.password.value,
            event.target.confirmPassword.value
        )
        setMessage(result.message);
        setIsSuccess(result.success);
        if (result.success) { window.location.href = '/login' }

        //  props.onCreate()
    }

    return (
        <>
            <form method='POST' className="login" onSubmit={handleCriar}>
                {isSuccess ? <p>Registro bem-sucedido! </p> : <p> {message} </p>}
                <input name="name" type="text" placeholder='Nome' />
                <input name="email" type="text" placeholder='E-mail' />
                <input name="password" type="text" placeholder='Senha' />
                <input name="confirmPassword" type="text" placeholder='Confirme a senha' />

                <button type="submit" >Criar e acessar</button>
            </form>
        </>
    );
}

