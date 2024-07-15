import { combineReducers } from "redux";
import adminReducer from "./admin/reducer";
let rootReducers = combineReducers({
    adminReducer,
});

export default rootReducers;