import { useState } from "react";
import { ReactComponent as Logo } from "../assets/imgs/logo.svg";
import {Auth, TemplateInput, TemplateButton} from "../assets/styles/styledComponents";

export default function SignUp() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

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
            <TemplateInput required type="text" id="name" value={name}
              placeholder="nome"
              onChange={(e) => setName(e.target.value)}
            />
            <TemplateInput required type="text" id="photo" value={photo}
              placeholder="foto"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <TemplateButton height="45" width="300" type="submit" >Cadastrar</TemplateButton>
          </form>
          <p>Já tem uma conta? Faça login!</p>
        </Auth>
      </>
    );
}