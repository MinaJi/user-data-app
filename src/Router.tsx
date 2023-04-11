import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddUser from "./pages/AddUser";
import Main from "./pages/Main";
import UserList from "./pages/UserList";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="add" element={<AddUser />} />
        <Route path="user-data" element={<UserList />} />
      </Routes>
    </>
  );
}

export default Router;
