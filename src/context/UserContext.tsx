import { UserDataType } from "../types";
import { ActionType, UserReducer } from "./UserReducers";
import React, { Dispatch, createContext, useContext, useReducer } from "react";

const initialUserData: Array<UserDataType> = [
  {
    userId: 1,
    displayName: "지민아",
    mbti: "INTP",
    bio: "안녕하세요",
    profileUrl:
      "https://i.pinimg.com/736x/a8/f1/6c/a8f16ce570dc2d3e51938b319cdc51a4.jpg",
  },
  {
    userId: 2,
    displayName: "김이박",
    mbti: "ENFP",
    bio: "반갑습니다",
    profileUrl:
      "https://i.pinimg.com/564x/42/51/90/425190385a0e790fd4115c0cf732bf40.jpg",
  },
  {
    userId: 3,
    displayName: "홍길동",
    mbti: "ESFJ",
    bio: "Hi~",
    profileUrl:
      "https://i.pinimg.com/564x/c1/0c/1d/c10c1d559f2401e5b0fcea25a624d15d.jpg",
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
