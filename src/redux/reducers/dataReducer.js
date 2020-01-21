const initState = {
    data: []
};

export default function(state = initState, action) {
   // console.log('dataReducer action data',action.data);
    switch (action.type) {
        case 'GET_DATA':
            return {
                 ...state,
                data: action.payload
                    };
        case 'DROP_DATA':
            return {
                ...state,
                data: []
            };

        default: return state;

    }
}
