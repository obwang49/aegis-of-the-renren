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

import { styleNoUserDragOrSelect } from "../common/BoxNoUserDragOrSelect.react";

import logo from "../../assets/logo.jpg";

export const useStyles = makeStyles((theme) => ({
  img: styleNoUserDragOrSelect,
}));

export default function NavBarLogo() {
  const classes = useStyles();

  return <Avatar classes={{ img: classes.img }} src={logo} variant="square" />;
}
