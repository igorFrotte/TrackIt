import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BackGroung } from "../assets/styles/styledComponents";
import { listToday, markItem } from "../services/axiosService";
import UserContext from "../services/UserContext";

export default function Today() {

  const dayjs = require("dayjs");  
  const day = dayjs().format("DD/MM");  
  const weekDay = dayjs().format("d"); 
  const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const [habits, setHabits] = useState([]);
  const { progress, updateProgress } = useContext(UserContext);
  
  useEffect(() => {
    renderToday();
  }, []);

  function renderToday(){
    const promise = listToday();
    promise
      .then((r) => setHabits(r.data))
      .catch(() => alert("algo deu errado..."));
  }

  function changeDone(e){
    let promise;
    if(e.done){
      promise = markItem(e.id, "uncheck");
    }else {
      promise = markItem(e.id, "check");
    }
    promise
      .then(() => {
        renderToday();
        updateProgress();
      })
      .catch(() => alert("algo deu errado..."));
  }
  
    return (
      <>
        <BackGroung>
          <Title>
            <h3>{days[weekDay]}, {day}</h3>
            {progress === 0 || isNaN(progress)? 
              <h4>Nenhum hábito concluído ainda</h4>:
              <p>{progress+"% dos hábitos concluídos"}</p>
            }
          </Title>
          {habits.map((e,index) => {
            let aux = false;
            if(e.currentSequence === e.highestSequence){
              aux = true;
            }
            return (
              <TodayHbt key={index} done={e.done} >
                <div>
                  <h3>{e.name}</h3>
                  <p>Sequência atual: {e.done? <span>{e.currentSequence} dias</span>: e.currentSequence + " dias"}</p>
                  <p>Seu recorde: {aux? <span>{e.highestSequence} dias</span>: e.highestSequence + " dias"}</p>
                </div>
                <ion-icon onClick={() => changeDone(e)} name="checkbox"></ion-icon>
              </TodayHbt>
            );
          })}
        </BackGroung>
      </>
    );
}

const TodayHbt = styled.div`
  width: 335px;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #666666;

  h3 {
    font-size: 20px;
    line-height: 25px;
  }
  p {
    font-size: 13px;
    line-height: 16px;
  }
  ion-icon {
    width: 70px;
    height: 70px;
    cursor: pointer;
    ${props => {
      if(props.done === true){
        return "color: #8FC549;";
      } return "color: #EBEBEB;";
    }}
  }
  span {
    color: #8FC549;
  }
`;

const Title = styled.div`
width: 335px;
margin-bottom: 25px;

  h3 {
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
  }
  p {
    font-size: 18px;
    line-height: 22px;
    color: #8FC549;
  }
  h4 {
    font-size: 18px;
    line-height: 22px;
    color: #BABABA;
  }
`;