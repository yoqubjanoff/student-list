import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


function App() {
const [students, setStudents] = useState([])
const [select, setSelect] = useState(-1)


  return (
    <>
     <Header select={select} setSelect={setSelect}  students={students} setStudents={setStudents}/>
     <Main select={select} setSelect={setSelect} students={students} setStudents={setStudents}/>
    </>
  );
}

export default App;
