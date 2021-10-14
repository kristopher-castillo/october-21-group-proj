import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
// import './SignupForm.css';

function SignupForm() {
  const dispatch = useDispatch();
  //   const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  //   if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
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
    <h2>Join SoundGround to save your favorite tracks, playlists and albums</h2>
    <form className = "signup-form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className="email-label">
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="username-label">
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="password-label">
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <div className="confirm-password-label">
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <div>
      <button type="submit" className="submit-button">Continue</button>
      </div>
    </form>
    <h6>We may use your email and devices for updates and tips on SoundGround's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.</h6>
    </div>
  );
}

export default SignupForm;
