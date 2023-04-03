import { createContext, ReactNode, useState } from "react";
import { UserType, UserContextInterface } from "../types";

const initState = {
  user: {
    userId: 0,
    displayName: "",
    mbti: "",
    bio: "",
  },
  setUser: (user: UserType) => {},
} as UserContextInterface;

export const UserContext = createContext(initState);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType>({
    userId: 0,
    displayName: "",
    mbti: "",
    bio: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
