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
