import { useEffect, useState } from "react";
import styled from "styled-components";
import { BackGroung, DayBt } from "../assets/styles/styledComponents";
import { deleteHabit, listHabits } from "../services/axiosService";
import CreateHabit from "./CreateHabit";

export default function Habits() {

  const [habits, setHabits] = useState([]);
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  
  useEffect(() => {
    renderHabits();
  }, []); 

  function renderHabits(){
    const promise = listHabits();
    promise
      .then((r) => {
        setHabits(r.data);
      })
      .catch(() => alert("algo deu errado..."));
  }

  function isMarked(value, index){
    if(habits[index].days.includes(value)){
      return true;
    }return false;
  }

  function removeHabit(i){
    if(window.confirm("Quer mesmo deletar esse Hábito?") === true){
      const id = habits[i].id;
      const promise = deleteHabit(id);
      promise
        .then(() => renderHabits())
        .catch(() => alert("erro ao deletar."));
    }
  }

  if(habits.length === 0){
    return (
      <BackGroung>
        <CreateHabit renderHabits={renderHabits} />
        <NoHabits>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits>
      </BackGroung>
    );
  }

  return (
    <BackGroung>
      <CreateHabit renderHabits={renderHabits} />
      {habits.map((e, ind) => {
        return (
          <ExtantHabits key={ind} >
            <p>{habits[ind].name}</p>
            {days.map((el, index) => <DayBt type="button" key={index} name={index+1} disabled={true} clicked={isMarked(index+1, ind)} >{el}</DayBt>)}
            <ion-icon onClick={() => removeHabit(ind)} name="trash-outline"></ion-icon>
          </ExtantHabits>
        );
      })}
    </BackGroung>
  );
}

const NoHabits = styled.div`
  width: 335px;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  margin-top: 30px;
`;

const ExtantHabits = styled.div`
  margin-top: 22px;
  width: 335px;
  background: #FFFFFF;
  border-radius: 5px;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  padding: 15px;
  position: relative;

  ion-icon {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`;