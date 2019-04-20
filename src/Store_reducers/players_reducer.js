const INITIAL_STATE = {
    items: [],
    isFetching: false
}



export default function PlayersReducers(state = INITIAL_STATE, action) {
    console.log(1,action.type)
    switch (action.type) {
        case 'PLAYERS_FETCHING':
            return {
                ...state,
                isFetching: true
            };
        case 'PLAYERS_LOADED':
            return {
                ...state,
                items: action.payload,
                isFetching: false
            };

        case action.type:
            return state;

    }
}

