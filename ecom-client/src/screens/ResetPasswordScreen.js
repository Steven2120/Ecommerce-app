import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ResetPasswordScreen.css";

const ResetPasswordScreen = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="rp__screen">
      <form className="rp__form" onSubmit={resetPasswordHandler}>
        <h3 className="rp__title">Reset Password</h3>
        {error && <span className="error__message">{error}</span>}
        {success && (
          <span className="success__message">
            {success} <Link to="/login">Login</Link>
          </span>
        )}

        <div className="form__group">
          <label htmlFor="password" className="reset__label">
            New Password
          </label>
          <input
            type="password"
            required
            id="password"
            placeholder="Please enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form__group">
          <label htmlFor="confirmpassword" className="reset__label">
            Confirm New Password
          </label>
          <input
            type="password"
            required
            id="confirmpassword"
            value={confirmPassword}
            placeholder="Please Reenter new password"
            autoComplete="true"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="reset__pass__btn btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;
