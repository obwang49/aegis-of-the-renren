/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import { combineClasses } from "../../utils/AppStylesUtils";
import BoxNoUserDragOrSelect from "../common/BoxNoUserDragOrSelect.react";
import NavBarAppLanguageMenu from "./NavBarAppLanguageMenu.react";
import NavBarAppThemeModeButton from "./NavBarAppThemeModeButton.react";
import NavBarLogo from "./NavBarLogo.react";
import NavBarTitle from "./NavBarTitle.react";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  item: {
    marginLeft: theme.spacing(1),
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <BoxNoUserDragOrSelect>
        <Toolbar>
          <NavBarLogo />
          <Box className={combineClasses([classes.title, classes.item])}>
            <NavBarTitle />
          </Box>
          <Box className={classes.item}>
            <NavBarAppLanguageMenu />
          </Box>
          <Box className={classes.item}>
            <NavBarAppThemeModeButton />
          </Box>
        </Toolbar>
      </BoxNoUserDragOrSelect>
    </AppBar>
  );
}
