import { UserDataType } from "../types";
import { ActionType, UserReducer } from "./UserReducers";
import React, { Dispatch, createContext, useContext, useReducer } from "react";

const initialUserData: Array<UserDataType> = [
  {
    userId: 1,
    displayName: "지민아",
    mbti: "INTP",
    bio: "안녕하세요",
  },
  {
    userId: 2,
    displayName: "김이박",
    mbti: "ENFP",
    bio: "반갑습니다",
  },
  {
    userId: 3,
    displayName: "홍길동",
    mbti: "ESFJ",
    bio: "Hi~",
  },
];

type UserDispatch = Dispatch<ActionType>;

const UserStateContext = createContext<UserDataType[] | null>(null);
const UserDispatchContext = createContext<UserDispatch | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(UserReducer, initialUserData);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUserState() {
  const state = useContext(UserStateContext);
  if (!state) throw new Error("Cannot find UserProvider");
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error("Cannot find UserProvider");
  return dispatch;
}
