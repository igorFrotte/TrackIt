import { useState } from "react";
import styled from "styled-components";
import { DayBt, TemplateButton, TemplateInput } from "../assets/styles/styledComponents";
import { ThreeDots } from  'react-loader-spinner';
import { createHabit } from "../services/axiosService";

export default function CreateHabit( {renderHabits} ) {

    const [disabled, setDisabled] = useState(false);
    const [creating, setCreating] = useState(false);
    const [formInf, setFormInf] = useState({name:"", days:[]});
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    function updateInfs(e){
        setFormInf({
          ...formInf,
          [e.target.name] : e.target.value 
        });
    }

    function updateDays(e){
        e = Number(e.target.name);
        if(formInf.days.includes(e)){
            setFormInf({
                ...formInf,
                days: formInf.days.filter((el) => e !== el)
              });
        }else {
            setFormInf({
                ...formInf,
                days: [...formInf.days, e]
              });
        }
    }

    function handleForm(e){
        e.preventDefault();
        if(formInf.days.length > 0){
            setDisabled(true);
            const promise = createHabit(formInf);
            promise
            .then((r) => {
                setDisabled(false);
                setCreating(false);
                setFormInf({name:"", days:[]});
                renderHabits();
            })
            .catch(() => {
                alert("Erro ao criar!");
                setDisabled(false);
            }); 
        }else{
            alert("Escolha pelo menos um dia.");
        }
    }

    function isClicked(value){
        if(formInf.days.includes(value)){
            return true;
        }return false;
    }
  
    return (
      <>
        <Create>
            <h1>Meus hábitos</h1>
            <TemplateButton onClick={() => setCreating(true)} height="35" width="40" >+</TemplateButton>
        </Create>
        {!creating? "" :
            <New disabled={disabled} >
            <form onSubmit={handleForm}>
                <TemplateInput required type="name" name="name" value={formInf.name}
                placeholder="nome do hábito" disabled={disabled}
                onChange={updateInfs}
                />
                <div>
                    {days.map((e, index) => <DayBt type="button" key={index} name={index+1} disabled={disabled} onClick={updateDays} clicked={isClicked(index+1)} >{e}</DayBt>)}
                </div>
                <div>
                    <p onClick={() => setCreating(false)} >Cancelar</p>
                    <TemplateButton height="35" width="85" >
                    {disabled? <ThreeDots color="#ffffff" height={40} width={50}/> : "Salvar"}
                    </TemplateButton>
                </div>
            </form>
            </New>
        }
        
      </>
    );
}

const Create = styled.div`
    min-width: 335px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    line-height: 30px;
    color: #126BA5;
`;
const New = styled.div`
    min-width: 335px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    margin: 20px 0;
    ${props => {
        if(props.disabled === true){
            return `
                input {
                    background: #F2F2F2;
                    color: #AFAFAF;
                }
                button {
                    opacity: 0.7 !important;
                    cursor: initial !important;
                }
            `; 
        }
    }}
    svg {
        margin-bottom: 30px;
    }
    form > div:last-child {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    p {
        font-size: 16px;
        line-height: 20px;
        color: #52B6FF;
        margin-right: 23px;
        cursor: pointer;
        ${props => {
            if(props.disabled === true){
                return `
                    opacity: 0.7;
                    cursor: default;
                `; 
            }
        }}
    }
`;