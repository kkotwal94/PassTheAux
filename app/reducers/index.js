import { combineReducers } from 'redux';
import user from 'reducers/user';
import message from 'reducers/message';
import { routerReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  message,
  routing
});

export default rootReducer;
