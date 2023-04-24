import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserState } from "../context/UserContext";
import { UserDataType } from "../types";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  padding: 50px 30px 100px 100px;
`;

const ImgDiv = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`;

type Param = { userId?: string };

function UserInfo() {
  const state = useUserState();
  const [userInfo, setUserInfo] = useState<UserDataType>();
  const { userId } = useParams<Param>();

  useEffect(() => {
    const data = state.find(
      (item) => item.userId === parseInt(userId ? userId : "", 10)
    );
    if (data) {
      setUserInfo(data);
    }
  }, [state, userId]);

  return (
    <Layout>
      <ImgDiv>
        <img src={userInfo?.profileUrl} alt="profile" />
      </ImgDiv>
      {userInfo?.displayName}
    </Layout>
  );
}

export default UserInfo;
