/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { deepOrange, cyan } from "@material-ui/core/colors";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import { useAppPath } from "../utils/AppPathUtils";
import { useAppLanguage } from "../utils/AppLanguageUtils";

import NavBar from "./nav/NavBar.react";
import HomePage from "./home/HomePage.react";

export const APP_THEME_PALETTE_PRIMARY_MAIN = cyan[900];

const theme = createMuiTheme({
  palette: {
    primary: { main: APP_THEME_PALETTE_PRIMARY_MAIN },
    secondary: deepOrange,
    type: "light",
  },
  typography: {
    fontFamily: "Carter One",
  },
});

export default function App() {
  const appTheme = responsiveFontSizes(theme);

  const appPath = useAppPath();
  useAppLanguage(); // const appLanguage = useAppLanguage();

  console.log("!!!");

  const renderAppContent = () => {
    switch (appPath) {
      case "home":
        return <HomePage />;
      default:
        return <h1>Aegis Of The RenRen</h1>;
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <NavBar />
      {renderAppContent()}
    </ThemeProvider>
  );
}
