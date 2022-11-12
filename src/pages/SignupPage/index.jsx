import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signup } from "../../services/Auth.services";

const SignupPage = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const Signup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password Missmatch");
      return;
    }
    const data = {
      firstName,
      lastName,
      email,
      phone,
      password,
    };
    try {
      const res = await signup(data);
      nav("/");
    } catch (error) {
      setError(error.response.data.message);
      console.log("Signup failed: ", error.response.data.message);
    }
  };

  return (
    <Container>
      <Card>
        <div className="title">Signup</div>
        {error?<div className="errorBar">{error}</div>:null}

        <form onSubmit={(e) => Signup(e)}>
          <div className="inputGroup">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
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
          <div className="inputGroup">
            <label htmlFor="cPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="cPassword"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
        <span className="psw">
          Have an account? <Link to="/login">Login</Link>
        </span>
      </Card>
    </Container>
  );
};

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
  height: 100%;
  background-color: white;
  /* border-radius: 30px; */
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
    text-align: left;
    /* border: 1px solid black; */
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
  form {
    /* border: 1px solid black; */
    /* width: 100%; */
    .inputGroup {
      /* padding: 16px; */
    }
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

export default SignupPage;
