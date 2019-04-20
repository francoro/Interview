import {combineReducers} from 'redux';
import PlayersReducer from './players_reducer'
export default combineReducers({
    players: PlayersReducer
})