import {combineReducers, createStore} from "redux";
import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer
});

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
