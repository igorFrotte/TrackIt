import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import PrivatePage from "./PrivatePage";
import UserContext from "../services/UserContext";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";
import Today from "./Today"
import Historic from "./Historic";
import { useState } from "react";

export default function App() {

  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={{progress, setProgress}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje"
            element={
              <PrivatePage>
                <Today />
              </PrivatePage>
            }
          />
          <Route path="/habitos"
            element={
              <PrivatePage>
                <Habits />
              </PrivatePage>
            }
          />
          <Route path="/historico"
            element={
              <PrivatePage>
                <Historic />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
