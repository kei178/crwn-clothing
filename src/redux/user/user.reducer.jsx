const INITIAL_STATE = {
  currentUer: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUer: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
