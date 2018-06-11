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

var referPath;

const initialState = {
  lastPath: false,
  aboutPath: false,
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
      console.log('LOCATION CHANGE');
      if(action.payload.pathname !== '/' && action.payload.pathname !== '/about' && action.payload.pathname !== '/share') {
        referPath = action.payload.pathname;
        console.log('not about');
        return Object.assign({}, initialState, state, {
          lastPath: action.payload.pathname,
          aboutPath: '/about'
        });
      } else if (action.payload.pathname == '/about') { 
        console.log('yes about');
        return Object.assign({}, initialState, state, {
          aboutPath: referPath
        });
      }
      return state;
    }
    default : {
      return state;
    }
  }
};
