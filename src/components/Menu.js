import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import UserContext from "../services/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";

export default function Menu() {

  const { progress } = useContext(UserContext);

    return (
        <>
            <Bot>
                <Link to="/habitos" ><p>Hábitos</p></Link>
                <Circle style={{ width: "90px", height: "90px", paddingBottom: "40px" }}>
                  <CircularProgressbarWithChildren
                    value={progress}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#3e98c7",
                      textColor: "#FFFFFF",
                      pathColor: "#FFFFFF",
                      trailColor: "transparent",
                      textSize: "18px",
                      pathTransitionDuration: 0.5,
                      strokeLinecap: "round"
                    })}
                  >
                    <div style={{ fontSize: 18, color: "#FFFFFF", marginTop: -20 }}>
                    <Link to="/hoje" ><span>Hoje</span></Link>
                    </div>
                  </CircularProgressbarWithChildren>
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
  
  a {
    color: #52B6FF;
  }
  a > span {
    color: #FFFFFF;
  }
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
`;