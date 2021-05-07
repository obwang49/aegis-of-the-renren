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

import DivNoUserDragOrSelect from "../common/DivNoUserDragOrSelect.react";
import NavBarAppLanguageMenu from "./NavBarAppLanguageMenu.react";
import NavBarLogo from "./NavBarLogo.react";
import NavBarTitle from "./NavBarTitle.react";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
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
          <div className={classes.title}>
            <NavBarTitle text="AEGIS OF THE RENREN" />
          </div>
          <NavBarAppLanguageMenu />
          <div>TBD</div>
        </Toolbar>
      </DivNoUserDragOrSelect>
    </AppBar>
  );
}
