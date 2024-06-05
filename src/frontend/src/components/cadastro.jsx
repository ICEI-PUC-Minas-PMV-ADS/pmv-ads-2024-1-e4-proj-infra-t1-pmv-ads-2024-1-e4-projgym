import './login.css'
import Button from './button.jsx'
import { userRegister } from '../services/userServices.js';

export default function Login(props) {
    const handleCriar = async (event) => {
        event.preventDefault();
        console.log(event.target.name.value)
        await userRegister(
            event.target.name.value,
            event.target.email.value,
            event.target.password.value,
            event.target.confirmPassword.value
        )
        //  props.onCreate()
    }

    return (
        <>
            <form method='POST' className="login" onSubmit={handleCriar}>
                <input name="name" type="text" placeholder='Nome' />
                <input name="email" type="text" placeholder='E-mail' />
                <input name="password" type="text" placeholder='Senha' />
                <input name="confirmPassword" type="text" placeholder='Confirme a senha' />

                <button type="submit" >Criar e acessar</button>
            </form>
        </>
    );
}

