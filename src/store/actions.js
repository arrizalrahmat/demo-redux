import axios from "axios";

export const counterIncrement = () => {
  return { type: "INCREMENT" };
};

export const counterDecrement = () => ({
  type: "DECREMENT",
});

export const setMembers = (payload) => ({
  type: "SET_MEMBERS",
  payload,
});

export const setIsLoading = (payload) => ({
  type: "SET_ISLOADING",
  payload,
});

export const setProducts = (payload) => ({
  type: "SET_PRODUCTS",
  payload,
});

export const fetchMembers = () => async (dispatch) => {
  try {
    const res = await axios.get("https://randomuser.me/api/?results=10");
    // console.log(res.data.results);
    await dispatch(setIsLoading(true));
    await dispatch(setMembers(res.data.results));
    await dispatch(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/products");
    // console.log(response.data);
    dispatch(setProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  const { products } = getState();
  console.log(products, "50");
  try {
    const response = await axios.delete(
      `http://localhost:3001/products/delete/${id}`
    );
    if (response.data.status === "OK") {
      dispatch(getProducts());
    }
  } catch (error) {
    console.log(error);
  }
};
