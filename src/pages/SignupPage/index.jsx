import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignupPage = () => {
  return (
    <Container>
      <Card>
        <div className="title">Signup</div>
        <form>
        <div className="inputGroup">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
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
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="cPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="cPassword"
              required
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
    .inputGroup{
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
