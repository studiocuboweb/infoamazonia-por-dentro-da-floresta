import reduxThunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { autoRehydrate }  from 'redux-persist';

export default [
  reduxThunk,
  reduxPromiseMiddleware(),
  routerMiddleware(browserHistory)
];
