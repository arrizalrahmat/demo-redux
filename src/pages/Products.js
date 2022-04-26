import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, getProducts } from "../store/actions";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div>
      <button>add product</button>
      <table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button>update</button>
                  <button onClick={() => handleDelete(product.id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
