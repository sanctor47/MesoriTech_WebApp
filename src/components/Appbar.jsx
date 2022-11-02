import styled from "styled-components";
import { FaBars, FaBell } from "react-icons/fa";
import { FiSettings, FiMail } from "react-icons/fi";
import { ThemeContext } from "../App";
import { v } from "../styles/variables";
import { useContext } from "react";

const Appbar = ({ sidebarControl }) => {
  //   const { collapseSidebar } = useProSidebar();
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <Container>
      <div className="right">
        <NavExpander onClick={sidebarControl}>
          <FaBars />
        </NavExpander>
        <Text>Hello, Aser</Text>
      </div>
      <div className="left">
        <ActionArea>
          <FaBell />
          <FiMail />
          <FiSettings />
        </ActionArea>
      </div>
    </Container>
  );
};

export default Appbar;

const Container = styled.div`
  padding: ${v.lgSpacing};
  background: ${({ theme }) => theme.bg};
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
  }

  .left {
  }
  `;

const NavExpander = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 28px;
  /* border: 1px solid black; */
`;

const Text = styled.div`
    /* background-color: aliceblue; */
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
`;

const ActionArea = styled.div`
  font-size: 28px;
  display: flex;
  gap: 0.8rem;
`;

// const Text = styled.p(
//     ({ theme }) => `
//       color: ${theme.colors.primary};
//     `
//   )
