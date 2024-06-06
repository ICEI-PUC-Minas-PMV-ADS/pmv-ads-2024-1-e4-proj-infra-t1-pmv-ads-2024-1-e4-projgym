import './login.css'
import Button from './button.jsx'
import { userlogin } from '../services/userServices.js';

export default function Login(props) {


    const handleCadastro = () => {
        props.onCadastro();
    }

    async function handleLogin(email, password) {
        if (await userlogin(email, password)) ('homeapp')
    }

    return (
        <>
            <div class="login">
                <input type="text" placeholder='E-mail' />
                <input type="password" placeholder='Senha' />

                <button onClick={handleLogin}>Acessar</button>
                <br />
                <br />
                <br />
                <div>
                    <span class="span-link">Ainda não tem acesso?</span>
                </div>
                <button onClick={handleCadastro}>Criar conta</button>
            </div>
        </>
    );
}

