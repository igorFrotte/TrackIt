import styled from "styled-components";
import { BackGroung } from "../assets/styles/styledComponents";
import Calendar from 'react-calendar';
import { useEffect, useState } from "react";
import { getHistoric } from "../services/axiosService";
import dayjs from "dayjs";

export default function Historic() {

  const [value, onChange] = useState(new Date());
  const [historic, setHistoric] = useState([]);
  const noBonus = true;

  useEffect(() => {
    const promise = getHistoric();
    promise
      .then((r) => setHistoric(r.data))
      .catch(() => alert("algo deu errado..."));
  },[]);

  if(noBonus){
    return (
      <BackGroung>
        <Template>
          <h3>Histórico</h3>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Template>
      </BackGroung>
    );
  }
  
    return (
      <>
        <BackGroung>
          <Template>
            <h3>Histórico</h3>
            <div>
              <MyCalendar 
                onChange={onChange} 
                value={value} 
                formatDay ={(locale, date) => dayjs(date).format('DD')}
                onClickDay={(date) => console.log(date)}
                tileClassName={"completed"}
              />
            </div>
          </Template>
        </BackGroung>
      </>
    );
  }

  const Template = styled.div`
    width: 335px;
    height: 400px;

    h3 {
      font-size: 23px;
      line-height: 29px;
      color: #126BA5;
    }
    & > div {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: #ffffff;
      margin-top: 10px;
      padding: 10px;
    }
    p {
      font-size: 18px;
      line-height: 22px;
      color: #666666;
      margin-top: 20px;
    }
  `;

  const MyCalendar = styled(Calendar)`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background-color: #fff;
      margin-right: 10px;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    .uncompleted {
      background-color: aqua;
      border-radius: 50%;
    }
  `;