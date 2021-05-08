/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { cyan, deepOrange } from "@material-ui/core/colors";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import { useValueByAppPath } from "../utils/AppPathUtils";
import { useValueByAppLanguage } from "../utils/AppLanguageUtils";
import { useAppThemeMode } from "../utils/AppThemeModeUtils";
import { useRenRenOauthResponse } from "../utils/RenRenOauthUtils";
import HomePage from "./home/HomePage.react";
import NavBar from "./nav/NavBar.react";

export const APP_THEME_PALETTE_PRIMARY_MAIN = cyan[900];
export const appThemeBase = Object.freeze({
  palette: {
    primary: { main: APP_THEME_PALETTE_PRIMARY_MAIN, dark: "#121212" },
    secondary: deepOrange,
    type: "",
  },
  typography: {
    fontFamily: "",
  },
});
export const appThemeTypographyFontFamily = Object.freeze({
  cn: "ZCOOL KuaiLe",
  eng: "Carter One",
});

export default function App() {
  const appFontFamilyByLanguage = useValueByAppLanguage(
    appThemeTypographyFontFamily
  );
  const { appThemeMode } = useAppThemeMode();
  const appTheme = responsiveFontSizes(
    createMuiTheme({
      ...appThemeBase,
      palette: {
        ...appThemeBase.palette,
        type: appThemeMode,
      },
      typography: {
        ...appThemeBase.typography,
        fontFamily: appFontFamilyByLanguage,
      },
    })
  );

  useRenRenOauthResponse();

  const appPage = useValueByAppPath({
    blog: <h1>Aegis Of The Blog</h1>,
    home: <HomePage />,
    profile: <h1>Aegis Of The Profile</h1>,
  });

  return (
    <ThemeProvider theme={appTheme}>
      <NavBar />
      {appPage}
    </ThemeProvider>
  );
}
