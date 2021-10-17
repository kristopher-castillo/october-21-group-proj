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
      amount: pledgeAmount,
      user_id: user.id,
      project_id: projectId
    }

    const updatedProject = {
      title: project?.title,
      description: project?.description,
      goal: project?.goal,
      categories_id: project?.categories_id,
      user_id: project?.user_id,
      current_amount: currentAmount + pledgeAmount,
      image_url: project?.image_url
    }


    if (user.money >= 10) {

      dispatch(createPledgeThunk(newPledge, projectId))
      dispatch(transactionThunk(user.id, userMoney - pledgeAmount))
      setUserMoney(userMoney - pledgeAmount)
      dispatch(projectAmountThunk(updatedProject, projectId))
      setCurrentAmount(currentAmount + pledgeAmount)
      history.push(`/projects/${projectId}`)
    } else {
      if (window.confirm("You're out of money! Would you like to add more?")) {
        history.push(`/users/${user.id}`)
      } else {
        history.push(`/projects/${projectId}`);
      }
      console.log('Not enough money, You broke')
    }

    console.log('This is my user money', user?.money)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="pledgeButtons">
        <input
          type="radio"
          id="pledge5"
          name="pledge_amount"
          value="5"
          onChange={(e) => setPledgeAmount(+(e.target.value))}
          >
        </input>
        <label for="pledge5">$5</label>
        <input
          type="radio"
          id="pledge10"
          name="pledge_amount"
          value="10"
          onChange={(e) => setPledgeAmount(+(e.target.value))}
          >
        </input>
        <label for="pledge10">$10</label>
        <input
          type="radio"
          id="pledge20"
          name="pledge_amount"
          value="20"
          onChange={(e) => setPledgeAmount(+(e.target.value))}
          >
        </input>
        <label for="pledge20">$20</label>
        <input
          type="radio"
          id="pledge50"
          name="pledge_amount"
          value="50"
          onChange={(e) => setPledgeAmount(+(e.target.value))}
          >
        </input>
        <label for="pledge50">$50</label>
        <input
          type="radio"
          id="pledge100"
          name="pledge_amount"
          value="100"
          onChange={(e) => setPledgeAmount(+(e.target.value))}
          >
        </input>
        <label for="pledge100">$100</label>
      </div>
      <div>
        <button>Submit your Pledge</button>
      </div>
    </form>
  )
}

export default PledgePage;
