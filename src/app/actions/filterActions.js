export const addFilter = (filter, quantity) => ({
  type: 'ADD_FILTER',
  filter,
  quantity
});

export const updateFilter = (filter, quantity, i) => ({
  type: 'UPDATE_FILTER',
  filter,
  quantity,
  i
});

export const removeFilter = (i) => ({
  type: 'REMOVE_FILTER',
  i
});
