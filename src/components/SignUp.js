import { useState } from "react";
import { ReactComponent as Logo } from "../assets/imgs/logo.svg";
import { Auth, TemplateInput, TemplateButton } from "../assets/styles/styledComponents";
import { ThreeDots } from  'react-loader-spinner';
import { singUp } from "../services/axiosService";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

  const navigate = useNavigate();
  const [formInf, setFormInf] = useState({email:"", password:"", name:"", image:"" });
  const [disabled, setDisabled] = useState(false);
  
  function updateInfs(e){
    setFormInf({
      ...formInf,
      [e.target.name] : e.target.value 
    });
  }

  function handleForm(e){
    e.preventDefault();
    setDisabled(true);
    const promise = singUp(formInf);
    promise
      .then(() => navigate("/"))
      .catch(() => {
        alert("Erro ao criar usuário!");
        setDisabled(false);
      });   
  }

    return (
      <>
        <Auth disabled={disabled}>
          <Logo />
          <form onSubmit={handleForm}>
            <TemplateInput required type="email" name="email" value={formInf.email}
              placeholder="email" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateInput required type="password" name="password" value={formInf.password}
              placeholder="senha" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateInput required type="text" name="name" value={formInf.name}
              placeholder="nome" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateInput required type="text" name="image" value={formInf.image}
              placeholder="foto" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateButton disabled={disabled} height="45" width="300" type="submit" >
              {disabled? <ThreeDots color="#ffffff" height={40} width={50}/> : "Cadastrar"}
              </TemplateButton>
          </form>
          <Link to="/" ><p>Já tem uma conta? Faça login!</p></Link>
        </Auth>
      </>
    );
}