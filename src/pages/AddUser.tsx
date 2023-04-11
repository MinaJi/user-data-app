import React, { useRef } from "react";
import styled from "styled-components";
import { useUserDispatch, useUserState } from "../context/UserContext";
import { ActionCreator } from "../context/UserReducers";

const Layout = styled.div`
  margin: 30px;
`;

const Card = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  input {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 10px;
  }
  .avatar {
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;

function AddUser() {
  const state = useUserState();
  const dispatch = useUserDispatch();
  let nextId = useRef(3);

  console.log(state);

  const addNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "addUser",
      payload: {
        userId: (nextId.current += 1),
        displayName: "www",
        mbti: "ddd",
        bio: "ddd",
      },
    });
  };

  return (
    <Layout>
      <Card>
        <p>유저를 등록하세요</p>
        <form onSubmit={addNewUser}>
          <div className="avatar">
            <p>여기에 아이콘</p>
          </div>
          <div>
            <label htmlFor="user-displayname">이름</label>
            <input id="display-name" />
          </div>
          <div>
            <label htmlFor="user-mbti">mbti</label>
            <input id="user-mbti" />
          </div>
          <div>
            <label htmlFor="user-bio">자기소개</label>
            <input id="user-bio" />
          </div>
          <div>
            <button type="submit">등록하기</button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default AddUser;
