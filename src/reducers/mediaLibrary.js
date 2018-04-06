import {
  UPDATE_MEDIA,
  REMOVE_MEDIA
} from 'actions/media';

const initialState = {};

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case UPDATE_MEDIA : {
      return Object.assign({}, initialState, state, {
        [action.data.id]: action.data
      });
    }
    case REMOVE_MEDIA : {
      const newState = {...state};
      delete newState[action.id];
      return newState;
    }
    default : {
      return state;
    }
  }
};
