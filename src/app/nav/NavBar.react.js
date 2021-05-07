/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import { combineClasses } from "../../utils/AppStylesUtils";
import DivNoUserDragOrSelect from "../common/DivNoUserDragOrSelect.react";
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
      <DivNoUserDragOrSelect>
        <Toolbar>
          <NavBarLogo />
          <div className={combineClasses([classes.title, classes.item])}>
            <NavBarTitle />
          </div>
          <div className={classes.item}>
            <NavBarAppLanguageMenu />
          </div>
          <div className={classes.item}>
            <NavBarAppThemeModeButton />
          </div>
        </Toolbar>
      </DivNoUserDragOrSelect>
    </AppBar>
  );
}
