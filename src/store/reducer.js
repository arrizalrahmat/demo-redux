const initialState = {
  counter: 0,
  members: [],
  isLoading: false,
  products: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "SET_MEMBERS":
      return {
        ...state,
        members: action.payload,
      };
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
