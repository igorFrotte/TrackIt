import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './globalStyles';
import PrivatePage from "./PrivatePage";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos"
            element={
              <PrivatePage>
                <Habits />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
