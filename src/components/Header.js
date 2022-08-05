import styled from "styled-components";
import { ReactComponent as TrackIt } from "../assets/imgs/trackIt.svg";

export default function Header() {

  const img = JSON.parse(localStorage.getItem("trackItUser")).image;

    return (
      <Top>
        <TrackIt />
        <img src={img} alt="profileImg" />
      </Top>
    );
}

const Top = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 0 10px 0 20px;
  z-index: 1;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
  }
`;