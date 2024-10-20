import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "ag-grid-community/styles/ag-grid.css"; // React AG Grid CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function App() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <BrowserRouter>
          <Switch>{/* <Route path='/' component={App} /> */}</Switch>
        </BrowserRouter>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
