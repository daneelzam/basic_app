const reducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_SUCSESSFULLY':
      return {
        ...state,
        isAuth: true,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false,
        user: { email: ' ', username: ' ' }
      };
    case 'INIT_RESTLIST':
      return {
        ...state,
        restList: action.payload
      };
    case 'SORT_BY_RATING':
      return {
        ...state,
        restList: [...state.restList.sort((a, b) => (b.resRating - a.resRating))]
      };
    default:
      return state;
  }
};

export default reducer;
