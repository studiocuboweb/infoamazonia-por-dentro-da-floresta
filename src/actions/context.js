export const CONTEXT_UPDATE = 'CONTEXT_UPDATE';
export const CONTEXT_RESET = 'CONTEXT_RESET';

const update = (context, data) => {
  return {
    type: CONTEXT_UPDATE,
    context,
    data
  }
};

export const updateContext = (context, data) => (dispatch) => {
  dispatch(update(context, data));
};

export const resetContext = () => (dispatch) => {
  dispatch({
    type: CONTEXT_RESET
  });
};
