import styled from "styled-components";
import { BackGroung } from "../assets/styles/styledComponents";
import Calendar from 'react-calendar';
import { useState } from "react";

export default function Historic() {

  const [value, onChange] = useState(new Date());
  
    return (
      <>
        <BackGroung>
          <Template>
            <h3>Histórico</h3>
            <div>
              <Calendar onChange={onChange} value={value} />
            </div>
          </Template>
        </BackGroung>
      </>
    );
  }

  const Template = styled.div`
    width: 335px;

    h3 {
      font-size: 23px;
      line-height: 29px;
      color: #126BA5;
    }
  `;