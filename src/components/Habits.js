import { useEffect, useState } from "react";
import { BackGroung } from "../assets/styles/styledComponents";
import { listHabits } from "../services/axiosService";
import CreateHabit from "./CreateHabit";

export default function Habits() {

  const [habits, setHabits] = useState([]);
  
  useEffect(() => {
    renderHabits();
  }, []); 

  function renderHabits(){
    const promise = listHabits();
    promise
      .then((r) => {
        setHabits(r.data);
        console.log(r.data);
      })
      .catch(() => alert("algo deu errado..."));
  }

  return (
    <BackGroung>
      <CreateHabit renderHabits={renderHabits} />
    </BackGroung>
  );
}
