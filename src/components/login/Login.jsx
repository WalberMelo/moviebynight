import React, { useState } from "react";
import { TextInputField } from "evergreen-ui";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

function Login() {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <div>
      <div className="login-logo">
        <h2>Movie by Night</h2>
      </div>
      <div className="login-wrapper">
        <h2>Sign In</h2>
        <div className="login-form">
          <form action="">
            <TextInputField
              className="login-form"
              type="text"
              label=""
              placeholder="Email or phone number"
              value={loginData.email}
              onChange={(e) => setValue(e.target.value)}
              // validationMessage="This field is required"
              // isInvalid={isInvalid}
            />
            <TextInputField
              type="text"
              label=""
              placeholder="password"
              value={loginData.password}
              onChange={(e) => setValue(e.target.value)}
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
        <Link to="/registration" style={{ textDecoration: "none" }}>
          <div className="login-registration">
            <h5 className="registration">
              <span>New to Movie By Night? </span>Sign up now.
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
