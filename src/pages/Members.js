import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMembers } from "../store/actions";

const Members = () => {
  // const [members, setMembers] = useState([]);
  const dispatch = useDispatch();
  const { members, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMembers());
  }, []);
  return (
    <div>
      <h1>Members page</h1>
      <h5>Select members to be shown</h5>
      <p>{JSON.stringify(isLoading)}</p>
      {isLoading ? (
        <h1>Sedang Loading</h1>
      ) : (
        // <p>{JSON.stringify(members, null, 4)}</p>
        <div>
          {members.map((member) => {
            return (
              <>
                <Link to={member.name.first}>{member.name.first}</Link> |
              </>
            );
          })}
        </div>
        // <div>
        //   {members.length > 0 &&
        //     members.map((member) => {
        //       return (
        //         <>
        //           <Link to={member}>{member}</Link> |
        //         </>
        //       );
        //     })}
        // </div>
      )}
      {/* {members.length > 0 ? (
        members.map((member) => {
          return (
            <>
              <Link to={member}>{member}</Link> |
            </>
          );
        })
      ) : (
        <></>
      )} */}
      <Outlet />
    </div>
  );
};

export default Members;
