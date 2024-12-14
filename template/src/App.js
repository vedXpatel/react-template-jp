import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "ag-grid-community/styles/ag-grid.css"; // React AG Grid CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SaltProvider } from "@salt-ds/core";
import Login from "./pages/Login";
import { useTheme } from "next-themes";
import Ideas from "./pages/Ideas";

function App() {
  const { theme } = useTheme();
  const [saltTheme, setSaltTheme] = useState("dark");

  useEffect(() => {
    if (theme) {
      setSaltTheme(theme.toLowerCase());
    }
  }, [theme]);

  return (
    <SaltProvider mode={saltTheme}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} /> 
              <Route path="/ideas" component={Ideas} />
            </Switch>
          </BrowserRouter>
        </NextThemesProvider>
      </NextUIProvider>
    </SaltProvider>
  );
}

export default App;
