import { createContext, useReducer } from "react";
import UserAccountProfileReducer, {
  initialProfileState,
} from "../reducers/UserAccountProfileReducer";

export const UserAccountProfileContext = createContext();

const UserAccountProfileProvider = ({ children }) => {
  const [userProfile, dipsatchUserProfile] = useReducer(
    UserAccountProfileReducer,
    initialProfileState
  );

  console.log(userProfile, "userProfile");

  return (
    <UserAccountProfileContext.Provider
      value={{ userProfile, dipsatchUserProfile }}
    >
      {children}
    </UserAccountProfileContext.Provider>
  );
};

export default UserAccountProfileProvider;
