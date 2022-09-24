import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../pages/Form";
import Navbar from "../components/Navbar";
import Table from "../pages/Table";
import Main from "../pages/Main";

function AppRouter() {
  const [infos, setInfos] = useState(JSON.parse(localStorage.getItem('infos')) || [] );
  console.log(infos);

  useEffect(() => {
    localStorage.setItem("infos", JSON.stringify(infos))    
  }, [infos])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form infos={infos} setInfos={setInfos} />} />
        <Route path="form/table" element={<Table infos={infos} setInfos={setInfos}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
