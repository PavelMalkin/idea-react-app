const initState = {
    data: []
};

export default function(state = initState, action) {
    console.log('dataReducer action data',action.data);
    switch (action.type) {
        case 'GET_DATA':
            return {
                 ...state,
                data: action.payload
                    };
        default: return state;

    }
}
