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

import { useValueByAppLanguage } from "../utils/AppLanguageUtils";
import { useValueByAppPath } from "../utils/AppPathUtils";
import { useAppThemeMode } from "../utils/AppThemeModeUtils";
import { useRenRenOauthResponse } from "../utils/RenRenOauthUtils";
import AppSignInUserInfoLoader from "./AppSignInUserInfoLoader.react";
import HomePage from "./home/HomePage.react";
import NavBar from "./nav/NavBar.react";
import ProfilePage from "./profile/ProfilePage.react";

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

  const appPage = useValueByAppPath({
    blog: <h1>Aegis Of The Blog</h1>,
    faq: <h1>Aegis Of The FAQ</h1>,
    home: <HomePage />,
    profile: <ProfilePage />,
  });

  useRenRenOauthResponse();

  return (
    <ThemeProvider theme={appTheme}>
      <NavBar />
      {appPage}
      <AppSignInUserInfoLoader />
    </ThemeProvider>
  );
}
