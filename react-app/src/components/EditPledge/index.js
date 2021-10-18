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
import "./EditPledge.css"

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

  };

  return (
    <div className="edit-pledge-container">
      <div className="edit-pledge-content">
        <div className="edit-pledge-title">Jumpstart {project?.title}!</div>
        <div className="edit-pledge-image">
          <img
            id="new-pledge-image"
            src={project?.image_url}
            alt={project?.title}
          ></img>
        </div>
      </div>
      <form onSubmit={handleSubmit} id="new-pledge-form">
        <div className="pledgeButtonsContainer">
          <input
            type="radio"
            className="pledge-radio"
            id="pledge5"
            name="pledge_amount"
            value="5"
            onChange={(e) => setNewPledgeAmount(+e.target.value)}
          ></input>
          <label htmlFor="pledge5">
            <div className="pledge-radio-clicked" id="pledge-button-5">
              <p className="tier-text">Tier 1</p>
              <p className="amount-text">$5</p>
            </div>
          </label>

          <input
            type="radio"
            className="pledge-radio"
            id="pledge10"
            name="pledge_amount"
            value="10"
            onChange={(e) => setNewPledgeAmount(+e.target.value)}
          ></input>
          <label htmlFor="pledge10">
            <div className="pledge-radio-clicked" id="pledge-button-10">
              <p className="tier-text">Tier 2</p>
              <p className="amount-text">$10</p>
            </div>
          </label>

          <input
            type="radio"
            className="pledge-radio"
            id="pledge20"
            name="pledge_amount"
            value="20"
            onChange={(e) => setNewPledgeAmount(+e.target.value)}
          ></input>
          <label htmlFor="pledge20">
            <div className="pledge-radio-clicked" id="pledge-button-20">
              <p className="tier-text">Tier 3</p>
              <p className="amount-text">$20</p>
            </div>
          </label>

          <input
            type="radio"
            id="pledge50"
            className="pledge-radio"
            name="pledge_amount"
            value="50"
            onChange={(e) => setNewPledgeAmount(+e.target.value)}
          ></input>
          <label htmlFor="pledge50">
            <div className="pledge-radio-clicked" id="pledge-button-50">
              <p className="tier-text">Tier 4</p>
              <p className="amount-text">$50</p>
            </div>
          </label>

          <input
            type="radio"
            id="pledge100"
            className="pledge-radio"
            name="pledge_amount"
            value="100"
            onChange={(e) => setNewPledgeAmount(+e.target.value)}
          ></input>
          <label htmlFor="pledge100">
            <div className="pledge-radio-clicked" id="pledge-button-100">
              <p className="tier-text">Tier 5</p>
              <p className="amount-text">$100</p>
            </div>
          </label>
        </div>
        <div className="submit-pledge-button-container">
          <button id="submit-pledge-button">Submit your Pledge</button>
        </div>
      </form>
    </div>
  );

}

export default EditPledge;
