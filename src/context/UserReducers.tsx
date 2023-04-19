import produce from "immer";
import { UserDataType } from "../types";

export const USER_DATA_ACTION = {
  ADD: "addUser" as const,
  DELETE: "deleteUser" as const,
};

export const ActionCreator = {
  addUser: (
    userId: number,
    displayName: string,
    mbti: string,
    bio: string,
    profileUrl: string
  ) => ({
    type: USER_DATA_ACTION.ADD,
    payload: {
      userId: userId,
      displayName: displayName,
      mbti: mbti,
      bio: bio,
      profileUrl: profileUrl,
    },
  }),
  deleteUser: (userId: number) => ({
    type: USER_DATA_ACTION.DELETE,
    payload: { userId: userId },
  }),
};

export type ActionType =
  | ReturnType<typeof ActionCreator.addUser>
  | ReturnType<typeof ActionCreator.deleteUser>;

export const UserReducer = (state: Array<UserDataType>, action: ActionType) => {
  switch (action.type) {
    case USER_DATA_ACTION.ADD:
      return produce(state, (draft: Array<UserDataType>) => {
        draft.push({
          userId: action.payload.userId,
          displayName: action.payload.displayName,
          mbti: action.payload.mbti,
          bio: action.payload.bio,
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
    default:
      return state;
  }
};
