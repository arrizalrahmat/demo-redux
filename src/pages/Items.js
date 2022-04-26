import React, { useState } from "react";
import Item from "./Item";
import getItems from "./data";
import { Outlet, useNavigate } from "react-router-dom";

const Items = () => {
  const items = getItems();
  const [itemState, setItemState] = useState(items);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Items</h1>
      {itemState.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <button onClick={() => navigate(`${item.id}`)}>Show Details</button>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Items;
