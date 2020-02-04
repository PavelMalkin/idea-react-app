// import axios from "axios";
// import { useDispatch } from 'react-redux'

const initState = {
    username: '',
    isLoggedIn: false,
    FBToken: null,
    loginError: null,
    registrationError: null
};

export default function(state = initState, action) {
   console.log('userReducer action is', action);
    switch (action.type) {
       case 'LOGIN_SUCCESS':
            return {
                ...state,
                username: action.userData.username,
                isLoggedIn: true,
                FBToken: action.Token,
                loginError: null
            };

        case 'LOGIN_ERROR':
            console.log('userReducer action is', action);
            return {
                ...state,
                loginError: action.err.response.statusText
            };

        case 'LOADING_USER':
            return {
                ...state,
                username: action.username,
                isLoggedIn: true,
                FBToken: localStorage.FBToken
            };

        case 'USER_LOGOUT':
            return {
                ...state,
                username: '',
                isLoggedIn: false,
                FBToken: null
            };

        case 'REGISTER_FAILED':
            return {
                ...state,
                registrationError: 'User already exist'
            };

        case 'REGISTER_SUCCESS':

            return {
                ...state,
                isLoggedIn: true,
                username: action.userData.username,
                FBToken: action.Token,
                registrationError: null
            };

        default: return state;


    }
}

// const getData = () => {
//     axios.get('http://localhost:4000/api/users')
//         .then(res => (useDispatch({type: 'GET_DATA', payload: res.data})));
// };
