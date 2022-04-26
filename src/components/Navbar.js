import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav>
      <Link to={"/"}>Home</Link> | <Link to={"/about"}>About us</Link> |{" "}
      <Link to={"/members"}>Members</Link> | <Link to={"/items"}>Items</Link> |{" "}
      <Link to={"/products"}>Products</Link>
      {localStorage.getItem("token") && (
        <button onClick={handleLogout}>logout</button>
      )}
    </nav>
  );
};

export default Navbar;
