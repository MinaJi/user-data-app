import React from "react";
import Card from "./Card";
import { useUserState } from "../context/UserContext";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  gap: 40px;
`;

function CardList() {
  const state = useUserState();

  console.log(state);
  return (
    <Div>
      {state.map((item, i) => (
        <Card
          key={i}
          userId={item.userId}
          displayName={item.displayName}
          mbti={item.mbti}
          bio={item.bio}
          profileUrl={item.profileUrl}
        />
      ))}
    </Div>
  );
}

export default CardList;
