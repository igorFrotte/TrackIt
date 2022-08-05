import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BackGroung } from "../assets/styles/styledComponents";
import { listToday, markItem } from "../services/axiosService";
import UserContext from "../services/UserContext";

export default function Today() {

  const [habits, setHabits] = useState([]);
  const { setProgress } = useContext(UserContext);
  
  useEffect(() => {
    renderToday();
  }, []);

  const done = habits.filter((e) => e.done !== false);
  const p = ((done.length)/(habits.length)) * 100;
  setProgress(p);

  function renderToday(){
    const promise = listToday();
    promise
      .then((r) => {
        setHabits(r.data);
      })
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
      })
      .catch((r) => alert("algo deu errado..."));
  }
  
    return (
      <>
        <BackGroung>
          {habits.map((e,index) => {
            let aux = false;
            if(e.currentSequence === e.highestSequence && e.highestSequence !== 0){
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