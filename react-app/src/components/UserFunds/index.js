import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import User from "../UsersPage/User";
import { transactionThunk } from "../../store/session";
import "./UserFunds.css";

function UserFunds() {
  //WILL NEED TO CHANGE THE STATE TO THE USER'S PROFILE INSTEAD OF CURRENT USER
  const sessionUser = useSelector((state) => state.session.user);
  const [currentMoney, setCurrentMoney] = useState(sessionUser.money)
  const { userId } = useParams();
  const dispatch = useDispatch();

  const handleFundsIncrease = () => {
    dispatch(transactionThunk(sessionUser.id, currentMoney + 5))
    setCurrentMoney(currentMoney + 5)
  }

  return (
    <div>
      <User users={sessionUser} />
      <div className="funds-container">
        <div className="funds-items">
          <p id="funds-heading">Increase Your Funds Here</p>
          <p id="funds-amount"> ${sessionUser.money}</p>
          <button id="funds-button" onClick={handleFundsIncrease}>+</button>
        </div>
      </div>
    </div>
  );
}

export default UserFunds;
