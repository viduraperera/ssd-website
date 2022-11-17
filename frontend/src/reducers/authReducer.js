import { GET_USER, LOGIN, LOGOUT, REGISTER } from "../constants/Constants";

const AuthReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return state;
    case LOGOUT:
      localStorage.clear();
      return { ...state, user: null };
    case GET_USER:
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("profile"))?.user,
      };
    case REGISTER:
      return state;
    default:
      return state;
  }
};

export default AuthReducer;
