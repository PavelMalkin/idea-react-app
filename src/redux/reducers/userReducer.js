const initState = {
    username: '',
    logined: false,
    FBToken: null
};

export default function(state = initState, action) {
    console.log('action',action);
    switch (action.type) {
       case 'USER_LOGIN':
            return {
                ...state,
                username: action.userData.username,
                logined: true,
                FBToken: action.FBToken
            };
          //  action.history.push('/');

        default: return state;


    }
}
