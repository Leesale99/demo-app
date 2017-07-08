

const userReducer = (state = {
  name: 'Alex',
  age: 31
}, action) => {
  switch (action.type) {
    case 'SET_NAME_FULFILLED':
      state = {
        ...state,
        name: action.payload
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};

export default userReducer;