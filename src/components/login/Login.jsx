import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextInputField } from "evergreen-ui";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const LoginArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    console.log(token);
    sessionStorage.setItem("token", JSON.stringify(token));
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // validationMessage="This field is required"
              // isInvalid={isInvalid}
            />
            <TextInputField
              className="login-form"
              type="text"
              label=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // isInvalid={isInvalid}
              // validationMessage="This field is required"
            />
            <LoginArea>
              <Button
                type="submit"
                className="btn-login"
                size="lg"
                variant="outline-secondary"
              >
                Sign In
              </Button>
            </LoginArea>
          </form>
        </div>
        <div className="login-registration">
          <h5 className="registration">
            <span>New to Movie By Night? </span>
            <Link
              to="/registration"
              className="signin"
              style={{ textDecoration: "none" }}
            >
              Sign up now.
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
