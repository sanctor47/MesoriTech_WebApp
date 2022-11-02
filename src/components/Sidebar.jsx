import { useContext, useRef, useState } from "react";

import logo_raw from "../assets/logo_raw.jpeg";
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";

import {RiPlantLine} from "react-icons/ri"
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople ,BsLayers} from "react-icons/bs";
import { Link } from "react-router-dom";
import { ImConnection } from "react-icons/im";
import styled from "styled-components";

import { btnReset, v } from "../styles/variables";
import { ThemeContext } from "../App";
import { useLocation } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("token")
}

const Sidebar = ({sidebarOpen}) => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();



  return (
    <SSidebar isOpen={sidebarOpen}>
      {/* <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </> */}
      <SLogo>
        <img src={logo_raw} alt="logo" />{" "}
      </SLogo>
      {/* <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch> */}
      <SDivider />
      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label, action }) => (
        <SLinkContainer key={label}>
          <SLink to="/" onClick={action} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Dashboard",
    icon: <MdOutlineAnalytics />,
    to: "/",
    notification: 0,
  },
  {
    label: "Feilds",
    icon: <BsLayers />,
    to: "/feilds",
    notification: 0,
  },
  {
    label: "Plants",
    icon: <RiPlantLine />,
    to: "/plants",
    notification: 0,
  },
  {
    label: "Devices",
    icon: <ImConnection />,
    to: "/devices",
    notification: 0,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
    action: null,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
    action: Logout,
  },
];

export default Sidebar;

const SSidebar = styled.div`
  width: ${({ isOpen }) => (!isOpen ? `100px` : v.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};
  position: relative;

  transition: all ease-in 1;

`;

const SSidebarButton = styled.button`
  ${btnReset};
  position: absolute;
  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

const SLogo = styled.div`
  /* width: 200px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  padding: 0.5em;

  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`;

const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

const SSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;

const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

const SLinkContainer = styled.div`
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg3};
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`;

const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;

  margin-right: ${v.mdSpacing};
`;

const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`;
const SThemeToggler = styled.button`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) =>
    !isActive ? theme.bg3 : theme.primary};

  position: relative;
`;

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;
