import React from "react";
import UserListNavbar from "../components/UserListNavbar";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  .nav-bar {
    background-color: #f8f8f8;
    height: 100vh;
    width: 20%;
    border-right: 1px solid #eeeeee;
  }
`;

function UserList() {
  return (
    <Layout>
      <div className="nav-bar">
        <UserListNavbar />
      </div>
      <div className="contents">여기에 콘텐츠</div>
    </Layout>
  );
}

export default UserList;
