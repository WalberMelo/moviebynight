import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { TextInputField } from "evergreen-ui";
import styled from "styled-components";
import PropTypes from "prop-types";

//Style login area
const LoginArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log(user.email, user.password);

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error")
        return setError("Correo invalido");
      if (error.code === "auth/missing-email")
        return setError("Introduce email");
      if (error.code === "auth/invalid-email")
        return setError("Email no existe");
      if (error.code === "auth/weak-password")
        return setError("La contraseña debe tener 6 carácteres");
      if (error.code === "auth/user-not-found")
        return setError("Usuario no registrado");
      if (error.code === "auth/too-many-requests")
        return setError("Demasiados intentos. Intente cambiar la contraseña");
      if (error.code === "auth/wrong-password")
        return setError("Contraseña errónea");
      if (error.code === "auth/email-already-in-use")
        return setError("en uso ");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user")
        return setError("Popup-closed");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-section">
      <div className="login-logo">
        <h2>Movie by Night</h2>
      </div>
      <div className="login-wrapper">
        <h2>Sign In</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <TextInputField
              className="login-form"
              type="text"
              label=""
              placeholder="Email or phone number"
              name="email"
              value={user.email}
              onChange={handleChange}
              // validationMessage="This field is required"
              // isInvalid={isInvalid}
            />
            <TextInputField
              className="login-form"
              type="text"
              label=""
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}

              // isInvalid={isInvalid}
              // validationMessage="This field is required"
            />
            <LoginArea>
              <button
                type="submit"
                className="btn-login"
                size="lg"
                variant="outline-secondary"
              >
                Sign In
              </button>
            </LoginArea>
          </form>
        </div>
        <div className="login-registration">
          <h5 className="registration">
            <span>New to Movie By Night? </span>
            <Link
              to="/register"
              className="signin"
              style={{ textDecoration: "none" }}
            >
              Sign up now.
            </Link>
          </h5>
        </div>
        <button className="google-btn" onClick={handleGoogleSignin}>
          <div className="google-icon">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <div className="btn-text">
            <p>Sign in with google</p>
          </div>
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#!"
          onClick={handleResetPassword}
        >
          Forgot Password?
        </a>
      </div>
      {error && <h3 className="errTitle">{error}</h3>}
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
//   setIsAuth: PropTypes.func.isRequired,
// };
