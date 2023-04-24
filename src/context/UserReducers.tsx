import produce from "immer";
import { UserDataType } from "../types";

export const USER_DATA_ACTION = {
  ADD: "addUser" as const,
  DELETE: "deleteUser" as const,
  UPDATE: "updateUser" as const,
};

export const ActionCreator = {
  addUser: (
    userId: number,
    displayName: string,
    mbti: string,
    bio: string,
    birthY: number,
    birthM: number,
    birthD: number,
    profileUrl: string
  ) => ({
    type: USER_DATA_ACTION.ADD,
    payload: {
      userId: userId,
      displayName: displayName,
      mbti: mbti,
      bio: bio,
      birthY: birthY,
      birthM: birthM,
      birthD: birthD,
      profileUrl: profileUrl,
    },
  }),
  deleteUser: (userId: number) => ({
    type: USER_DATA_ACTION.DELETE,
    payload: { userId: userId },
  }),
  updateUser: (
    userId: number,
    displayName: string,
    mbti: string,
    bio: string,
    birthY: number,
    birthM: number,
    birthD: number,
    profileUrl: string
  ) => ({
    type: USER_DATA_ACTION.UPDATE,
    payload: {
      userId: userId,
      displayName: displayName,
      mbti: mbti,
      bio: bio,
      birthY: birthY,
      birthM: birthM,
      birthD: birthD,
      profileUrl: profileUrl,
    },
  }),
};

export type ActionType =
  | ReturnType<typeof ActionCreator.addUser>
  | ReturnType<typeof ActionCreator.deleteUser>
  | ReturnType<typeof ActionCreator.updateUser>;

export const UserReducer = (state: Array<UserDataType>, action: ActionType) => {
  switch (action.type) {
    case USER_DATA_ACTION.ADD:
      return produce(state, (draft: Array<UserDataType>) => {
        draft.push({
          userId: action.payload.userId,
          displayName: action.payload.displayName,
          mbti: action.payload.mbti,
          bio: action.payload.bio,
          birthY: action.payload.birthY,
          birthM: action.payload.birthM,
          birthD: action.payload.birthD,
          profileUrl: action.payload.profileUrl,
        });
      });
    case USER_DATA_ACTION.DELETE:
      let index = state.findIndex(
        (item) => item.userId === action.payload.userId
      );
      return produce(state, (draft: Array<UserDataType>) => {
        draft.slice(index, 1);
      });
    case USER_DATA_ACTION.UPDATE:
      return produce(state, (draft: Array<UserDataType>) => {
        draft.push({
          userId: action.payload.userId,
          displayName: action.payload.displayName,
          mbti: action.payload.mbti,
          bio: action.payload.bio,
          birthY: action.payload.birthY,
          birthM: action.payload.birthM,
          birthD: action.payload.birthD,
          profileUrl: action.payload.profileUrl,
        });
      });
    default:
      return state;
  }
};
