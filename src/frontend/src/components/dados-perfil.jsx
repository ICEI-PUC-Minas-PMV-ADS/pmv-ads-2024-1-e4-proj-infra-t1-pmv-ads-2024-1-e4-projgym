import './dados-perfil.css'
import Button from './button.jsx'

export default function Dados() {
    return (
        <>
            <div class="container-dados lista">
                <div class="foto">
                    <img src="./../../public/avatar.jpeg" alt="" />
                </div>
                <span class="alterar-foto cursor-pointer">Alterar foto</span>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='E-mail'/>

                <div class="alterar-senha">
                    <div>
                        <span class="title">Alterar Senha</span>
                    </div>
                    <input type="password" placeholder='Senha'/>
                    <input type="password" placeholder='Nova senha'/>
                    <Button label="Atualizar"></Button>
                    {/* <div class="sair">
                        <Button label="Sair"></Button>
                    </div> */}
                </div>
            </div>
        </>
    );
}