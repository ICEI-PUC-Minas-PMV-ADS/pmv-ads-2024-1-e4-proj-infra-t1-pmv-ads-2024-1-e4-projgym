import axios from "axios";
import { useNavigate } from "react-router-dom";
export async function userRegister(name, email, password, confirmPassword) {
  try {
    const res = await axios.post(
      "http://localhost:3333/users/register",
      {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    if (res.status === 201 || res.status === 204 || res.status === 200) {
      return { success: true, message: "Cadastro realizado com sucesso!" };
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { success: false, message: "As senhas digitadas estão diferentes." };
    } else if (error.response && error.response.status === 422)
      return {
        success: false,
        message:
          "favor preencher corretamente todos os campos (nome, email e senha).",
      };
    else if (error.response && error.response.status === 409)
      return {
        success: false,
        message: "Email ja cadastrado, favor usar outro e-mail.",
      };
    {
      console.error(
        "Erro ao fazer fazer cadastro, favor confira as informações inseridas e tente novamente:",
        error
      );
      return {
        success: false,
        message: "Erro ao fazer fazer cadastro, tente novamente mais tarde ",
      };
    }
  }
}

//
export async function userlogin(email, password) {
  try {
    const response = await axios.post("http://localhost:3333/users/login", {
      email,
      password,
    });
    if (
      response.status === 201 ||
      response.status === 204 ||
      response.status === 200
    ) {
      return { success: true, message: "Login com sucesso" };
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { success: false, message: "Usuário ou senha incorreto." };
    } else if (error.response && error.response.status === 422) {
      return { success: false, message: "Favor preencher todos  os dados." };
    } else {
      return {
        success: false,
        message: "Usuário não existe na base de dados.",
      };
    }
  }
}

export async function userupdate(name, email, password, confirmPassword) {
  const response = await axios.put("http://localhost:3333/edit/", {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });
  return response.status == 200;
}
