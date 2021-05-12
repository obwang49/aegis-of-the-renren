/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

import { useAppAccessTokenSyncer } from "../utils/AppAccessTokenUtils";
import { useAppLanguageSyncer } from "../utils/AppLanguageUtils";
import { useAppPathSyncer, useValueByAppPath } from "../utils/AppPathUtils";
import { useAppProfileBlogCountListener } from "../utils/AppProfileUtils";
import { useAppSignInUserInfoListener } from "../utils/AppSignInUserUtils";
import { useAppTheme } from "../utils/AppStylesUtils";
import { useAppThemeModeSyncer } from "../utils/AppThemeModeUtils";
import { useRenRenOauthResponseListener } from "../utils/RenRenOauthUtils";
import BlogPage from "./blog/BlogPage.react";
import FAQPage from "./faq/FAQPage.react";
import HomePage from "./home/HomePage.react";
import NavBar from "./nav/NavBar.react";
import ProfilePage from "./profile/ProfilePage.react";
import AppLoadingBackdrop from "./AppLoadingBackdrop.react";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  pagePaper: {
    minHeight: "100vh",
  },
}));

export default function App() {
  const classes = useStyles();

  const { appTheme } = useAppTheme();

  const appPage = useValueByAppPath({
    blog: <BlogPage />,
    faq: <FAQPage />,
    home: <HomePage />,
    profile: <ProfilePage />,
  });

  useAppAccessTokenSyncer();
  useAppLanguageSyncer();
  useAppPathSyncer();
  useAppThemeModeSyncer();

  useRenRenOauthResponseListener();

  const { isLoading: isSignInUserInfoLoading } = useAppSignInUserInfoListener();
  useAppProfileBlogCountListener();

  return (
    <ThemeProvider theme={appTheme}>
      <Paper className={classes.pagePaper}>
        <NavBar />
        {appPage}
        <AppLoadingBackdrop isLoading={isSignInUserInfoLoading} />
      </Paper>
    </ThemeProvider>
  );
}
