import axios from "axios";

export const getData = () => (dispatch) => {
    axios.get('http://localhost:4000/api/users')
        .then(res => (
            dispatch({type: 'GET_DATA', payload: res.data})
        ))
};

export const login = (userData, history, FBToken) => (dispatch) => {
    dispatch({type: 'USER_LOGIN', userData, history, FBToken})
};

export const getUserData = () => (dispatch) => {
    dispatch({type: 'LOADING_USER', username: 'Pasha'})
};
