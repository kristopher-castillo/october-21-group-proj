import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { createPledgeThunk, getSpecificPledgeThunk } from "../../store/pledge";
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

    const newPledge = {
      amount: 10,
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
      current_amount: currentAmount + 10,
      image_url: project?.image_url,
    };
    if (user.money >= 10) {
      dispatch(createPledgeThunk(newPledge, project?.id));
      dispatch(transactionThunk(user.id, userMoney - 10));
      setUserMoney(userMoney - 10);
      dispatch(projectAmountThunk(updatedProject, project?.id));
      setCurrentAmount(currentAmount + 10);
      history.push(`/projects/${project?.id}`);
    } else {
      console.log("Not enough money, You broke");
    }

    console.log("This is my user money", user?.money);
  };

  return (
    <>
    <h2>Update your Pledge Below!</h2>
    <div>
      <button onClick={handleSubmit}>10</button>
    </div>
    </>
  );

}

export default EditPledge;