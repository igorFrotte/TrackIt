import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import PrivatePage from "./PrivatePage";
import UserContext from "../services/UserContext";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";
import Today from "./Today"
import Historic from "./Historic";
import { useEffect, useState } from "react";
import { listToday } from "../services/axiosService";

export default function App() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    updateProgress();
  }, []);
  
  function updateProgress(){
    const promise = listToday();
    promise
      .then((r) => {
        const done = r.data.filter((e) => e.done !== false);
        const p = ((done.length)/(r.data.length)) * 100;
        setProgress(p);
      })
      .catch(() => alert("algo deu errado..."));
  }
  
  return (
    <UserContext.Provider value={{progress, updateProgress}}>
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
