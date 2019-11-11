import { combineReducers } from 'redux';
import games from './games';
import user from './user'

export default combineReducers({
  games,
  user
})
