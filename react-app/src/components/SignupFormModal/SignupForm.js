import React, { useState } from "react";
import { useDispatch} from "react-redux";
// import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signUp( username, email, password )
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div className="signup-form-container">
      <h2>Bring your create project to life</h2>
    <form className = "signup-form" onSubmit={handleSubmit}>
      <div>
        {errors.map((error, idx) => (
          <div key={idx}>{error}</div>
        ))}
      </div>
      <div className="email-label">
        <label>
        Email
        </label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="username-label">
      <label>
        Username
      </label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="password-label">
      <label>
        Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="confirm-password-label">
      <label>
        Confirm Password
      </label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div className="submit-button">
      <button type="submit">Create account</button>
      </div>
    </form>
    <h6>We will send spam to your email for all eternity</h6>
    </div>
  );
}

export default SignupForm;
