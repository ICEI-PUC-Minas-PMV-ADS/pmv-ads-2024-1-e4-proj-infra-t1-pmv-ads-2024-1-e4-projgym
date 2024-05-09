import './login.css'
import Button from './button.jsx'

export default function Login() {
    return (
        <>
            <div class="login">
                <input type="text" placeholder='E-mail'/>
                <input type="text" placeholder='Senha'/>

                <Button label="Acessar"></Button>
                <br />
                <br />
                <br />
                <div>
                    <span class="span-link">Ainda não tem acesso?</span>
                </div>
                <Button label="Criar conta"></Button>
            </div>
        </>
    );
}

