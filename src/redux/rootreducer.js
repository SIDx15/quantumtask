import {combineReducers} from "redux";
import userreducer from "./reducer";

const rootreducer = combineReducers({
    user: userreducer
})

export default rootreducer;