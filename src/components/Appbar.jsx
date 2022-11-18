import styled from "styled-components";
import { FaBars, FaBell } from "react-icons/fa";
import { FiSettings, FiMail } from "react-icons/fi";
import { v } from "../styles/variables";

const Appbar = ({ sidebarControl }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <SContainer>
      <div className="right">
        <NavExpander onClick={sidebarControl}>
          <FaBars />
        </NavExpander>
        <Text>
          Hello, {user.firstName} {user.lastName}
        </Text>
      </div>
      <div className="left">
        <ActionArea>
          <FaBell />
          <FiMail />
          <FiSettings />
        </ActionArea>
      </div>
    </SContainer>
  );
};

export default Appbar;

const SContainer = styled.div`
  padding: ${v.lgSpacing};
  background: ${({ theme }) => theme.bg};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

const NavExpander = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 28px;
`;

const Text = styled.div`
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionArea = styled.div`
  font-size: 28px;
  display: flex;
  gap: 0.8rem;
`;