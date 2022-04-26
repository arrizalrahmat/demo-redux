import React from "react";
import { useParams } from "react-router-dom";
import getItems from "./data";

const Item = ({ item }) => {
  const { itemId } = useParams();
  const items = getItems();
  const data = items.find((item) => item.id === Number(itemId));
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.power}</h1>
    </div>
  );
};

export default Item;
