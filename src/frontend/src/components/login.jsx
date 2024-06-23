import "./login.css";
import Button from "./button.jsx";
import { userlogin } from "../services/userServices.js";
import { useState } from "react";
// import { jwtDecode } from "jwt-decode";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  // const token = localStorage.getItem("token")
  // const decodedToken = jwtDecode(token);
  const handleCadastro = async () => {
    const consulta = await props.onCadastro();
  };

  async function handleLogin(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário
    const verificar = await userlogin(email, password);
    console.log(verificar);
    setMessage(verificar.message);
    setIsSuccess(verificar.success);
    if (verificar.success) {
      return props.onLogin('');
    }
  }

  return (
    <>
      <div className="login">
        <form onSubmit={handleLogin}>
          {isSuccess ? <p>Login realizado com sucesso!</p> : <p>{message}</p>}
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <button type="submit">Acessar</button>
        </form>
        <br />
        <br />
        <br />
        <div>
          <span className="span-link">Ainda não tem acesso?</span>
        </div>
        <button onClick={handleCadastro}>Criar conta</button>
      </div>
    </>
  );
}