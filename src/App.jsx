import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import Feilds from "./pages/Feilds";
import Devices from "./pages/Devices";
import Plants from "./pages/Plants";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Device from "./pages/Device";
import Plant from "./pages/Plant";

const RouteGaurd = () => {
  const auth = localStorage.getItem("token")
  // const auth = "7409327509327";
  // const auth = null;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Routes>
          <Route element={<RouteGaurd />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/feilds" element={<Feilds />} />
            <Route exact path="/devices" element={<Devices />} />
            <Route path="/devices/:id" element={<Device />} />
            <Route exact path="/plants" element={<Plants />} />
            <Route path="/plants/:id" element={<Plant />} />
            {/* <Route exact path="/feilds" element={<Feilds />} /> */}
            {/* <Route exact path="/prizes" element={<RankingPage />} /> */}
            {/* <Route exact path="/scan" element={<ScanPage />} /> */}
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
