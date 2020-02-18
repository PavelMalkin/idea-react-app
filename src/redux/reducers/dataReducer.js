const initState = {
    ideas: [],
    data: [],
    comments: []
};

export default function(state = initState, action) {
   // console.log('dataReducer action data',action.data);
    switch (action.type) {
        case 'CREATE_IDEA_SUCCESS':
            return {
              ...state,
              data: action.payload
            };

        case 'DELETE_IDEA' :
            return {
              ...state,
              ideas: state.ideas.filter( res => res.id !== action.payload )
            };

        case 'GET_DATA':
            return {
                 ...state,
                ideas: action.payload.data.items
                    };
        case 'DROP_DATA':
            return {
                ...state,
                data: []
            };
        // case 'LOAD_COMMENTS':
        //     console.log('Action load comment', action);
        //     return {
        //         ...state
        //
        //     };
        // case 'IDEA_UPVOTE':
        //     return {
        //         ...state,
        //         data.ideas.
        //     };

        default: return state;

    }
}
