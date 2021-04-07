import { combineReducers } from "redux";
import notesReducer from "../containers/notes/reducer";
import appReducer from "./commanReducer";

const createReducer = () => {
  const comnbinedAppReducer = combineReducers({
    appReducer,
    notesReducer,
  });

  const rootReducer = (state, action) => {
    return comnbinedAppReducer(state, action);
  };
  return rootReducer;
};

export default createReducer;
