import React from "react";
import { Container, Row } from "reactstrap";
import { Button, Input } from "reactstrap";
import { useLogin } from "./hooks";
import "./style.css";
import ErrorComponent from "../../Components/error";
import { useSelector } from "react-redux";

const Login = () => {
  const { handleLogin, setUsername, setPassword, err } = useLogin();
  const appError = useSelector(({ appReducer }) => appReducer.appError);

  if (appError) {
    return <ErrorComponent />;
  }

  return (
    <div className="login__form">
      <h2 className="title">Login</h2>
      <Container>
        <Row>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Row>
        <br />
        <Row>
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Row>
        <br />
        <Row>
          <Button color="primary" className="_btn" onClick={handleLogin}>
            Login
          </Button>
        </Row>
        <div className="pass__note">* use username: test && password: test</div>
        <br />
        {err && (
          <Row>
            <div className="error">{err}</div>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Login;
