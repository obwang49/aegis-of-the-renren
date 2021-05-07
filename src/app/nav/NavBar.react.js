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

import NavBarLogo from "./NavBarLogo.react";
import NavBarTitle from "./NavBarTitle.react";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginLeft: "0.5rem",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <NavBarLogo />
        <div className={classes.title}>
          <NavBarTitle text="AEGIS OF THE RENREN" />
        </div>
        <div>TBD</div>
      </Toolbar>
    </AppBar>
  );
}
