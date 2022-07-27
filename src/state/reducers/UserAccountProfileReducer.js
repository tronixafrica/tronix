import { Action } from "history";
import { ACTIONS } from "../actions/userProfileActions";

export const initialProfileState = {};

const UserAccountProfileReducer = (state = initialProfileState, action) => {
  console.log(state, "this is tyu state");

  switch (action.type) {
    case ACTIONS.CREATE_USER_PROFILE:
      console.log(action.userProfile);
      // ...state, object: { ...state.object, courseName: "Science"}
      state = action.userProfile;
      console.log(state, "this is it");
      return state;
    case ACTIONS.UPDATE_AIRSYN:
      console.log(state, "this is mer state");
      return {
        ...state,
        device: {
          ...state.device,
          airsyn: action.userProfile,
        },
      };
    case ACTIONS.UPDATE_PROXIE:
      console.log(state, "this is mer state");

      return {
        ...state,
        device: {
          ...state.device,
          proxie: action.userProfile,
        },
      };

    default:
      return state;
  }
};

export default UserAccountProfileReducer;
