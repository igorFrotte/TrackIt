import { useState } from "react";
import { ReactComponent as Logo } from "../assets/imgs/logo.svg";
import {Auth, TemplateInput, TemplateButton} from "../assets/styles/styledComponents";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return (
      <>
        <Auth>
          <Logo />
          <form onSubmit={() => alert("oi") }>
            <TemplateInput required type="email" id="email" value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TemplateInput required type="password" id="password" value={password}
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TemplateButton height="45" width="300" type="submit" >Entrar</TemplateButton>
          </form>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Auth>
      </>
    );
}