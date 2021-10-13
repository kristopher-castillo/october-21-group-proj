import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { createPledgeActionThunk } from "../../store/pledge";
// import { signUp } from '../../store/session';
import { getSpecificProjectThunk } from "../../store/project";
import { transactionThunk } from "../../store/session";

const PledgePage = () => {
  const [amount, setAmount] = useState(0);
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((store) => store.projects.projects);
  const { projectId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  console.log('this is my project', projects)
  console.log('this is my user', user)

  useEffect(() => {
    dispatch(getSpecificProjectThunk(projectId))
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPledge = {
      amount,
      user_id: user.id,
      project_id: projectId
    }
    if(user.money >= 10){
      dispatch(createPledgeActionThunk(newPledge, projectId))
      dispatch(transactionThunk(user.id, user.money - 10))

    }else {
      console.log('Not enough money, You broke')
    }

  }


  return (
    <div>
      <button
        onClick={handleSubmit}>
        10
      </button>
    </div>

  )

}

export default PledgePage;
