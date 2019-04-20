import * as API from '../api'

export const PLAYERS_LOAD = () => {

    return (dispatch) => {
        dispatch(PLAYERS_FETCHING());
        API.getPlayers().then((data) => {
            console.log(data)
            dispatch(PLAYERS_LOADED(data))
        }).catch((err) => {
            console.log("errr", err)
        })
    }
}


export const PLAYERS_FETCHING = () => {
    return {
        type: 'PLAYERS_FETCHING'
    }
}

export const PLAYERS_LOADED = (payload) => {
    return {
        type: 'PLAYERS_LOADED',
        payload: payload
    }
}