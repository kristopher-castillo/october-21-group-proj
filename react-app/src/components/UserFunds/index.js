import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import User from "../UsersPage/User";
import { getBackedProjectsThunk } from "../../store/users";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./UserFunds.css";

function UserFunds() {
  //WILL NEED TO CHANGE THE STATE TO THE USER'S PROFILE INSTEAD OF CURRENT USER
  const sessionUser = useSelector((state) => state.session.user);
  const { userId } = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      <User users={sessionUser} />
      <div className="funds-container">
        <div className="funds-items">
          <h2 id="funds-heading">Increase Your Funds Here</h2>
          <p>{sessionUser.money}</p>
          <button id="funds-button" onClick={sessionUser.money += 1}>+</button>
        </div>
      </div>
    </div>
  );
}

export default UserFunds;
