import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localForage from 'localforage';
import context from './context';
import media from './media';
import mediaLibrary from './mediaLibrary';
import { routerReducer } from 'react-router-redux';

const storage = localForage.createInstance({
  name: 'Digging into the Mining Arc',
  description: 'Persistant application state'
});

export default function reducers () {
  return combineReducers({
    context: persistReducer({
      key: 'context',
      storage
    }, context),
    media,
    mediaLibrary,
    router: routerReducer
  });
};
