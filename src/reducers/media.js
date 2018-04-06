import {
  SET_MEDIA,
  EXPAND_MEDIA
} from 'actions/media';

import {
  REHYDRATE
} from 'redux-persist';

const initialState = {
  expanded: false
};

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case SET_MEDIA : {
      if(action.data == null) {
        return Object.assign({}, initialState);
      } else {
        return Object.assign({}, initialState, state, action.data, {
          expanded: false
        });
      }
    }
    case EXPAND_MEDIA : {
      return Object.assign({}, initialState, state, {
        expanded: action.data
      });
    }
    default : {
      return state;
    }
  }
};
