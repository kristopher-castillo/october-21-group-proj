import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { createPledgeThunk } from "../../store/pledge";
// import { signUp } from '../../store/session';
import { getSpecificProjectThunk, projectAmountThunk } from "../../store/project";
import { transactionThunk } from "../../store/session";

const PledgePage = () => {
  const user = useSelector((state) => state.session.user);
  const project = useSelector((store) => store.projects?.projects);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [userMoney, setUserMoney] = useState(user.money)
  const [pledgeAmount, setPledgeAmount] = useState(0)
  const { projectId } = useParams();

  console.log("THISISPROJECT", project)
  
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getSpecificProjectThunk(projectId))
  }, [dispatch, projectId])

  useEffect(() => {
    setCurrentAmount(project?.current_amount)
  }, [project?.current_amount])


  const handleSubmit = (e) => {
    e.preventDefault()

    const newPledge = {
      amount: 10,
      user_id: user.id,
      project_id: projectId
    }

    const updatedProject = {
      title: project?.title,
      description: project?.description,
      goal: project?.goal,
      categories_id: project?.categories_id,
      user_id: project?.user_id,
      current_amount: currentAmount + 10,
      image_url: project?.image_url
    }
    if (user.money >= 10) {
      
      dispatch(createPledgeThunk(newPledge, projectId))
      dispatch(transactionThunk(user.id, userMoney - 10))
      setUserMoney(userMoney - 10)
      dispatch(projectAmountThunk(updatedProject, projectId))
      setCurrentAmount(currentAmount + 10)
      history.push(`/projects/${projectId}`)
    }else {
      console.log('Not enough money, You broke')
    }

    console.log('This is my user money', user?.money)
  }


  return (
    <div class="pledgeButtons">
      <button
        id="pledge5"
        onClick={() => setPledgeAmount(5)}>
        $5
      </button>
      <button
        id="pledge10"
        onClick={() => setPledgeAmount(10)}>
        $10
      </button>
      <button
        id="pledge20"
        onClick={() => setPledgeAmount(20)}>
        $20
      </button>
      <button
        id="pledge50"
        onClick={() => setPledgeAmount(50)}>
        $50
      </button>
      <button
        id="pledge100"
        onClick={() => setPledgeAmount(100)}>
        $10
      </button>
    </div>

  )

}

export default PledgePage;
