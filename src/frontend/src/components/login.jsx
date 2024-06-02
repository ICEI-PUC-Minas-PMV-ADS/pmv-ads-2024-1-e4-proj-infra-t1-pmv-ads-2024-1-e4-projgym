import './login.css'
import Button from './button.jsx'

export default function Login(props) {

    const handleLogin = () => {
        props.onLogin();
    }

    const handleCadastro = () => {
        props.onCadastro();
    }

    return (
        <>
            <div class="login">
                <input type="text" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>

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

