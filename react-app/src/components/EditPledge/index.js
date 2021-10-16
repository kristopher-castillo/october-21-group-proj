import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { updatePledgeThunk, getSpecificPledgeThunk } from "../../store/pledge";
// import { signUp } from '../../store/session';
import {
  getSpecificProjectThunk,
  projectAmountThunk,
} from "../../store/project";
import { transactionThunk } from "../../store/session";

const EditPledge = () => {
  const user = useSelector((state) => state.session.user);
  const project = useSelector((store) => store.projects?.projects);
  const pledge = useSelector((store) => store.pledges?.pledges)
  const [currentAmount, setCurrentAmount] = useState(0);
  const [userMoney, setUserMoney] = useState(user.money);
  const [newPledgeAmount, setNewPledgeAmount] = useState(0);
  const { pledgeId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getSpecificPledgeThunk(pledgeId));
  }, [dispatch, pledgeId]);

  useEffect(() => {
    dispatch(getSpecificProjectThunk(pledge?.project_id));
  }, [dispatch, pledge?.project_id]);

  useEffect(() => {
    setCurrentAmount(project?.current_amount);
  }, [project?.current_amount]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPledge = {
      id: pledge?.id,
      amount: newPledgeAmount,
      user_id: user.id,
      project_id: pledge?.project_id,
    };
  //  ( current pledge - new pledge) + users money
  //  (newpledge - currentpledge) + project money
    const updatedProject = {
      title: project?.title,
      description: project?.description,
      goal: project?.goal,
      categories_id: project?.categories_id,
      user_id: project?.user_id,
      current_amount: (newPledgeAmount - pledge?.amount) + currentAmount,
      image_url: project?.image_url,
    };
    if (user.money >= 10) {
      dispatch(updatePledgeThunk(updatedPledge));
      dispatch(transactionThunk(user.id, (pledge?.amount - newPledgeAmount) + userMoney));
      setUserMoney((pledge?.amount - newPledgeAmount) + userMoney);
      dispatch(projectAmountThunk(updatedProject, project?.id));
      setCurrentAmount((newPledgeAmount - pledge?.amount) + currentAmount);
      history.push(`/projects/${project?.id}`);
    } else {
      console.log("Not enough money, You broke");
    }

    console.log("This is my user money", user?.money);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pledgeButtons">
        <input
          type="radio"
          id="pledge5"
          name="pledge_amount"
          value="5"
          onChange={(e) => setNewPledgeAmount(+e.target.value)}
          // checked={pledge?.amount === 5 ? true : false}
        ></input>
        <label for="pledge5">$5</label>
        <input
          type="radio"
          id="pledge10"
          name="pledge_amount"
          value="10"
          onChange={(e) => setNewPledgeAmount(+e.target.value)}
          // checked={pledge?.amount === 10 ? true : false}
        ></input>
        <label for="pledge10">$10</label>
        <input
          type="radio"
          id="pledge20"
          name="pledge_amount"
          value="20"
          onChange={(e) => setNewPledgeAmount(+e.target.value)}
          // checked={pledge?.amount === 20 ? true : false}
        ></input>
        <label for="pledge20">$20</label>
        <input
          type="radio"
          id="pledge50"
          name="pledge_amount"
          value="50"
          onChange={(e) => setNewPledgeAmount(+e.target.value)}
          // checked={pledge?.amount === 50 ? true : false}
        ></input>
        <label for="pledge50">$50</label>
        <input
          type="radio"
          id="pledge100"
          name="pledge_amount"
          value="100"
          onChange={(e) => setNewPledgeAmount(+e.target.value)}
          // checked={pledge?.amount === 100 ? true : false}
        ></input>
        <label for="pledge100">$100</label>
      </div>
      <div>
        <button>Update your Pledge</button>
      </div>
    </form>
  );

}

export default EditPledge;