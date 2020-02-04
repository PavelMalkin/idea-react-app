import axios from "axios";


export const getData = () => (dispatch) => {
    axios.get('http://localhost:4000/api/users')
        .then(res => (
            dispatch({type: 'GET_DATA', payload: res.data})
        ))
};

export const loginUser = (userData, history) => dispatch => {

    axios.post('http://localhost:4000/login', userData)
        .then(res => {
            const Token = 'Bearer ' + res.data.token;
            axios.defaults.headers.common['Authorization'] = Token;
            localStorage.setItem('FBToken', Token);
            dispatch(({type: 'LOGIN_SUCCESS', userData, Token}))
            history.push('/');
        })
        .catch(err => {
            console.log('Error login is', err.response.data.message);
            const ErrorMessage = err.response.data.message;
            dispatch(({type: 'LOGIN_ERROR', err}));
        });
};

export const signUpUser = (userData, history) => (dispatch) => {
    console.log('user data in signups action',userData);
    axios.post('http://localhost:4000/register', userData)
        .then( res => {
            // console.log('sign up sucess res', res.data);
            const Token = 'Bearer ' + res.data.token;
            axios.defaults.headers.common['Authorization'] = Token;
            localStorage.setItem('FBtoken', Token);
            dispatch({type: 'REGISTER_SUCCESS', userData, Token});
            history.push('/');
        })
        .catch( err => {
            console.log('Sign Up Error', err.response);
            dispatch({type: 'REGISTER_FAILED'})
        })
};

export const logOutUser = () => dispatch => {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('FBToken');
    dispatch({type: 'USER_LOGOUT'});
    dispatch({type: 'DROP_DATA'});
};


export const getUserData = () => (dispatch) => {
    dispatch({type: 'LOADING_USER', username: 'Pasha'})
};

