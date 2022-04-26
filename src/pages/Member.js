import React from "react";
import { useParams } from "react-router-dom";

const Member = () => {
  const { memberName } = useParams();
  return (
    <div>
      <h1>{memberName}</h1>
      <h5>This is {memberName} page</h5>
    </div>
  );
};

export default Member;
