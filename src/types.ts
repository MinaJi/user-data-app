import { Dispatch, SetStateAction } from "react";

export interface UserType {
  userId: number;
  displayName: string;
  mbti: string;
  bio: string;
}

export interface UserContextInterface {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
}

// 1. 유저 데이터 타입 정의
export interface UserDataType {
  userId: number;
  displayName: string;
  mbti: string;
  bio: string;
}