/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/logo.jpg";

const useStyles = makeStyles((theme) => ({
  img: {
    MozUserSelect: "none",
    msUserSelect: "none",
    UserDrag: "none",
    UserSelect: "none",
    WebkitUserDrag: "none",
    WebkitUserSelect: "none",
  },
}));

export default function NavBarLogo() {
  const classes = useStyles();

  return <Avatar classes={{ img: classes.img }} src={logo} variant="square" />;
}
