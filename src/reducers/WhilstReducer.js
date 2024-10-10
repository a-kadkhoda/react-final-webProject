const WhilstReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default WhilstReducer;
