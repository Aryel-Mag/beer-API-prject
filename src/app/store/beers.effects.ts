on(BeersAction.getBeersSuccess, (state, { beers, status }) => {
  return {
    ...state,
    pStatus: status,
    data: [beers]
  }
}),
  on(BeersAction.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  }),