export const SET_MEDIA = 'SET_MEDIA';
export const EXPAND_MEDIA = 'EXPAND_MEDIA';
export const UPDATE_MEDIA = 'UPDATE_MEDIA';
export const REMOVE_MEDIA = 'REMOVE_MEDIA';

const _set = data => {
  return {
    type: SET_MEDIA,
    data
  }
};
const _expand = data => {
  return {
    type: EXPAND_MEDIA,
    data
  }
};
const _update = data => {
  return {
    type: UPDATE_MEDIA,
    data
  }
};
const _remove = id => {
  return {
    type: REMOVE_MEDIA,
    id
  }
};

export const setMedia = (data) => (dispatch) => {
  dispatch(_set(data));
};

export const expandMedia = (data) => (dispatch) => {
  dispatch(_expand(data));
}

export const updateMedia = (data) => (dispatch) => {
  dispatch(_update(data));
};

export const removeMedia = (id) => (dispatch) => {
  dispatch(_remove(id));
};
