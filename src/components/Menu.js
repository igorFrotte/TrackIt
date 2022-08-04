import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
    return (
        <>
            <Bot>
                <Link to="/habitos" ><p>Hábitos</p></Link>
                <Circle>
                    <CircularProgressbar
                        value={54}
                        text={<Link to="/hoje" >Hoje</Link>}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            strokeLinecap: "butt"
                        })}
                    />
                </Circle>  
                <Link to="/historico" ><p>Histórico</p></Link>
            </Bot>    
        </>
    );
}

const Bot = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #FFFFFF;
  font-size: 18px;
  line-height: 22px;
  color: #52B6FF;

  p {
    width: 80px;
    text-align: center;
  }
`;

const Circle = styled.div`
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-45px);
  width: 90px;
  height: 90px;
  & > svg > text {
    color: #FFFFFF;
  }
`;