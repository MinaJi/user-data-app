import React from "react";
import styled from "styled-components";
import { UserDataType } from "../types";

const CardLayout = styled.div`
  box-shadow: 0px 0px 20px rgba(170, 170, 170, 0.32);
  width: 280px;
  height: 320px;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: inherit;
    height: inherit;
  }
`;

const CardBox = styled.div`
  text-align: center;
  padding-top: 10px;
  .display-name {
    font-size: 20px;
    font-weight: 500;
  }
`;

function Card(props: UserDataType) {
  return (
    <CardLayout>
      <Avatar>
        <img src={props.profileUrl} alt="profile" />
      </Avatar>
      <CardBox>
        <div className="display-name">{props.displayName}</div>
        <div>{props.mbti}</div>
        <div>{props.bio}</div>
      </CardBox>
    </CardLayout>
  );
}

export default Card;
