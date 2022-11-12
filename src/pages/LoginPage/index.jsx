import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../services/Auth.services";

const LoginPage = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const nav = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const res = await login(data);
      nav("/");
    } catch (error) {
      setError(error.response.data.message)
      console.log("Login failed: ", error.response.data.message);
    }
  };

  return (
    <Container>
      <Card>
        <div className="title">
          Login
          <Link to="/signup">Create an Account</Link>
        </div>
        {error?<div className="errorBar">{error}</div>:null}
        <form onSubmit={Login}>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <span className="psw">
          Forgot <Link to="#">password?</Link>
        </span>
      </Card>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
  width: 100vw;
  height: 100vh;
`;

const Card = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  .errorBar{
    width: 100%;
    padding: 0.6rem;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #884c4c78;
    border-radius: 10px;
  }
  .title {
    width: 100%;
    /* text-align: left; */
    /* border: 1px solid black; */
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      background-color: #04aa6d;
      color: white;
      text-decoration: none;
      border-radius: 1rem;
      font-size: 1rem;
      padding: 12px 16px;
      /* margin: 8px 0; */
      /* border: none; */
      /* cursor: pointer; */
      /* width: 100%; */
      :hover {
        opacity: 0.8;
      }
    }
  }
  form {
    /* border: 1px solid black; */
    width: 100%;

    input {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    button {
      background-color: #04aa6d;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
      :hover {
        opacity: 0.8;
      }
    }
  }
`;
