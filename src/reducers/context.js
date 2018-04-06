import {
  CONTEXT_UPDATE,
  CONTEXT_RESET
} from 'actions/context';

import {
  REHYDRATE
} from 'redux-persist';

import {
  LOCATION_CHANGE
} from 'react-router-redux';

const initialState = {
  lastPath: false,
  storyScroll: {},
  storyHeight: {}
};

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case CONTEXT_UPDATE : {
      state = Object.assign({}, initialState, state, {
        [action.context]:
          (typeof action.data == 'object' ? {
            ...state[action.context],
            ...action.data
          } : action.data)
      });
      return state;
    }
    case CONTEXT_RESET : {
      return Object.assign({}, initialState);
    }
    case LOCATION_CHANGE : {
      if(action.payload.pathname !== '/') {
        return Object.assign({}, initialState, state, {
          lastPath: action.payload.pathname
        });
      }
      return state;
    }
    default : {
      return state;
    }
  }
};
