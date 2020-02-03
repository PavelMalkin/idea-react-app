// import axios from "axios";
// import { useDispatch } from 'react-redux'

const initState = {
    username: '',
    logined: false,
    FBToken: null,
    loginError: null,
    registrationError: null
};

export default function(state = initState, action) {
   // console.log('userReducer action is',action);
    switch (action.type) {
       case 'USER_LOGIN':
            //action.history.push('/');
            return {
                ...state,
                username: action.userData.username,
                logined: true,
                FBToken: action.FBToken
            };

        case 'LOADING_USER':
            return {
                ...state,
                username: action.username,
                logined: true,
                FBToken: localStorage.FBToken
            };

        case 'USER_LOGOUT':
            return {
                ...state,
                username: '',
                logined: false,
                FBToken: null
            };
          //

        default: return state;


    }
}

// const getData = () => {
//     axios.get('http://localhost:4000/api/users')
//         .then(res => (useDispatch({type: 'GET_DATA', payload: res.data})));
// };
