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
import NavBarAppSideDrawer from "./NavBarAppSideDrawer.react";
import NavBarAppThemeModeButton from "./NavBarAppThemeModeButton.react";
import NavBarLogo from "./NavBarLogo.react";
import NavBarTitle from "./NavBarTitle.react";

const useStyles = makeStyles((theme) => ({
  titleBox: {
    flexGrow: 1,
  },
  itemBox: {
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
          <Box className={combineClasses([classes.titleBox, classes.itemBox])}>
            <NavBarTitle />
          </Box>
          <Box className={classes.itemBox}>
            <NavBarAppLanguageMenu />
          </Box>
          <Box className={classes.itemBox}>
            <NavBarAppThemeModeButton />
          </Box>
          <Box className={classes.itemBox}>
            <NavBarAppSideDrawer />
          </Box>
        </Toolbar>
      </BoxNoUserDragOrSelect>
    </AppBar>
  );
}
