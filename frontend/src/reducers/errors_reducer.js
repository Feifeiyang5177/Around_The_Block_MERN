import { combineReducers } from "redux";

import sessionErrorsReducer from "./errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default errorsReducer;
