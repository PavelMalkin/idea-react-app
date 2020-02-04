import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer
});

const middleware = [thunk];

const store = createStore(reducers, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
