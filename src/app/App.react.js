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
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import {
  useAppLanguageSyncer,
  useValueByAppLanguage,
} from "../utils/AppLanguageUtils";
import { useAppPathSyncer, useValueByAppPath } from "../utils/AppPathUtils";
import { useAppProfileBlogCountListener } from "../utils/AppProfileUtils";
import { useAppSignInUserInfoListener } from "../utils/AppSignInUserUtils";
import {
  useAppThemeMode,
  useAppThemeModeSyncer,
} from "../utils/AppThemeModeUtils";
import { useRenRenOauthResponseListener } from "../utils/RenRenOauthUtils";
import BlogPage from "./blog/BlogPage.react";
import HomePage from "./home/HomePage.react";
import NavBar from "./nav/NavBar.react";
import ProfilePage from "./profile/ProfilePage.react";
import AppLoadingBackdrop from "./AppLoadingBackdrop.react";

import Paper from "@material-ui/core/Paper";

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

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "100vh",
  },
}));

export default function App() {
  const classes = useStyles();

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
    blog: <BlogPage />,
    faq: <h1>Aegis Of The FAQ</h1>,
    home: <HomePage />,
    profile: <ProfilePage />,
  });

  useAppLanguageSyncer();
  useAppPathSyncer();
  useAppThemeModeSyncer();

  useRenRenOauthResponseListener();

  const { isLoading: isSignInUserInfoLoading } = useAppSignInUserInfoListener();
  const {
    isLoading: isProfileBlogCountLoading,
  } = useAppProfileBlogCountListener();

  console.log("!-!-!");

  return (
    <ThemeProvider theme={appTheme}>
      <Paper className={classes.page}>
        <NavBar />
        {appPage}
        <AppLoadingBackdrop
          isLoading={isSignInUserInfoLoading || isProfileBlogCountLoading}
        />
      </Paper>
    </ThemeProvider>
  );
}
