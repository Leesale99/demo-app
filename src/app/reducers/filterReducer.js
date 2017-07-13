const filterReducer = (state = [], action) => {
  if (typeof action.filter !== undefined) {
    switch (action.type) {
      case 'ADD_FILTER':
        return [...state, {
          name: action.filter,
          quantity: action.quantity
        }];
      case 'UPDATE_FILTER':
        return [
          ...state.slice(0, action.i),
          {
            name: action.filter,
            quantity: action.quantity
          },
          ...state.slice(action.i + 1)
        ];
      case 'REMOVE_FILTER':
        return [
          ...state.slice(0, action.i),
          ...state.slice(action.i + 1)
        ]
      default:
        return state;
    }
  }
  return state;
}

export default filterReducer;
