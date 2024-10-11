const CartReducer = (state, action) => {
  switch (action.type) {
    case "buy":
      return [...state, { id: action.payload.id, count: action.payload.count }];
    case "increased":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: item.count + 1 }
          : item
      );
    case "decreased":
      return state.map((item) =>
        item.id === action.payload.id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      );
    case "remove":
      return state.filter((item)=> item.id !== action.payload.id)
    default:
      return state;
  }
};

export default CartReducer;
