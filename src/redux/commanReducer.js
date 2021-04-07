import { SET_ERROR } from "./commanActions";
const initialState = {
  appError: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, appError: action.payload };
    default:
      return state;
  }
};

export default appReducer;
