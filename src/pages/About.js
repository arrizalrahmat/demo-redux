import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to={"about-company"}>About Company</Link> |{" "}
      <Link to={"about-me"}>About Me</Link>
      <Outlet />
    </div>
  );
};

export default About;
