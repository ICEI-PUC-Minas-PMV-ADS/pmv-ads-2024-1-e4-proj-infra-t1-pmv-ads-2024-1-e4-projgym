import './dados-perfil.css'
import Button from './button.jsx'
import { userupdate } from '../services/userServices.js';

export default function Dados({props}) {
    const [message, setMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleCriar = async (event) => {
        event.preventDefault();
        console.log(event.target.name.value)
        const result = await userupdate(
            event.target.name.value,
            event.target.email.value,
            event.target.password.value,
            event.target.confirmPassword.value
        )
        setMessage(result.message);
        setIsSuccess(result.success);
        // if (result.success) { window.location.href = '/login' }

        //  props.onCreate()
    }
    return (
        <>
            <div class="container-dados lista">
                <div class="foto">
                    <img src="./../../public/avatar.jpg" alt="" />
                </div>
                <span class="alterar-foto cursor-pointer">Alterar foto</span>
                <input name='nome' type="text" placeholder='Nome'/>
                <input name='email' type="text" placeholder='E-mail'/>

                <div class="alterar-senha">
                    <div>
                        <span class="title">Alterar Senha</span>
                    </div>
                    <input name='senha' type="password" placeholder='Senha'/>
                    <input name='confirmarSenha' type="password" placeholder='Nova senha'/>
                    <Button label="Atualizar"></Button>
                    {/* <div class="sair">
                        <Button label="Sair"></Button>
                    </div> */}
                </div>
            </div>
        </>
    );
}