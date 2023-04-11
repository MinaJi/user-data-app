import React from "react";
import styled from "styled-components";
import { UserType } from "../types";

const CardLayout = styled.div`
  background-color: #3ab0ff;
  width: 300px;
  height: 400px;
  border-radius: 20px;
`;

function Card(props: UserType) {
  // const state = useUserState();
  // const dispatch = useUserDispatch();

  return <CardLayout>{props.displayName}</CardLayout>;
}

export default Card;
