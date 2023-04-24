import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddUser from "./pages/AddUser";
import Main from "./pages/Main";
import UserList from "./pages/UserList";
import UserInfo from "./components/UserInfo";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="add" element={<AddUser />} />
        <Route path="user-data" element={<UserList />}>
          <Route path=":userId" element={<UserInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
