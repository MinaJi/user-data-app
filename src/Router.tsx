import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddUser from "./pages/AddUser";
import Main from "./pages/Main";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="add" element={<AddUser />} />
      </Routes>
    </>
  );
}

export default Router;
