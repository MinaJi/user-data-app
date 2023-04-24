import React, { useState } from "react";
import styled from "styled-components";
import { useUserState } from "../context/UserContext";
import { Link, Outlet, useParams } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  .nav-bar {
    background-color: #f8f8f8;
    height: 100vh;
    width: 20%;
    border-right: 1px solid #eeeeee;
  }
`;

const Nav = styled.nav`
  li {
    list-style: none;
  }
  .active-item {
    color: red;
    font-weight: 500;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;

type Param = { userId?: string };

function UserList() {
  const state = useUserState();
  const { userId } = useParams<Param>();
  const [activeItem, setActiveItem] = useState<number>(
    parseInt(userId ? userId : "")
  );

  const handleItemClick = (userId: number) => {
    setActiveItem(userId - 1);
  };

  // console.log(activeItem);

  return (
    <Layout>
      <div className="nav-bar">
        <Nav>
          {state.map((item, i) => (
            <ul key={i}>
              <li
                className={activeItem === i ? "active-item" : ""}
                onClick={() => handleItemClick(item.userId)}
              >
                <Link to={`${item.userId}`}>{item.displayName}</Link>
              </li>
            </ul>
          ))}
        </Nav>
      </div>
      <div className="contents">
        <Outlet />
      </div>
    </Layout>
  );
}

export default UserList;
