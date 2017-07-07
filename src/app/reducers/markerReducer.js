

const markerReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MARKER':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case 'REMOVE_MARKER':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }

   return state;

};

export default markerReducer;
