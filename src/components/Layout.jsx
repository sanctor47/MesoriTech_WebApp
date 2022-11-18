import styled from "styled-components";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import { v } from "../styles/variables";
import { useState } from "react";
// import { Container } from "react-bootstrap";


const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    console.log(sidebarOpen)
  }

  return (
    <SContainer>
      <Sidebar sidebarOpen={sidebarOpen} />
      <SMain>
        <Appbar sidebarControl={toggleSidebar}/>
        {children}
      </SMain>
    </SContainer>
  );
};

export default Layout;

export const SLayout = styled.div`
  display: flex;
  /* border: 1px solid black; */
`;

export const SMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* border: 1px solid black; */
  flex: 1;
  padding: calc(${v.smSpacing} * 2);
  h1 {
    font-size: 14px;
  }
`;

const SContainer = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  width: 100%;
  /* border:1px solid black; */
  /* position: relative; */
  /* border: 1px solid black; */
  gap: 0.5rem;
  /* height: 100vh; */
  .right {
    height: 100%;
    /* border: 1px solid black; */
  }
  .left {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }
`;
