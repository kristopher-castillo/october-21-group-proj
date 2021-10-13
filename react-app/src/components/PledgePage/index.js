import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { createPledgeActionThunk } from "../../store/pledge";
// import { signUp } from '../../store/session';

const PledgePage = () => {
  const [amount, setAmount] = useState(0);
  const user = useSelector((state) => state.session.user);
  const projects = useSelector((store) => store.projects.projects);
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();




  return (
    <div>
      <button
        onClick={() => {
        
      }}>

      </button>
    </div>

  )

}
