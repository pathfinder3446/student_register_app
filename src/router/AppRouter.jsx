import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Main from "../pages/Main";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
