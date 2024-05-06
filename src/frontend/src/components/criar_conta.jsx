import './login.css'
import Button from './button.jsx'

export default function Login() {
    return (
        <>
            <div class="login">
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='E-mail'/>
                <input type="text" placeholder='Senha'/>
                <input type="text" placeholder='Confirme a senha'/>

                <Button label="Criar e acessar"></Button>
            </div>
        </>
    );
}

