/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { combineClasses } from "../../utils/AppStylesUtils";
import { APP_THEME_PALETTE_PRIMARY_MAIN } from "../App.react";

import cover from "../../assets/cover.png";

const useStyles = makeStyles((theme) => ({
  coverBox: {
    height: "100%",
    position: "absolute",
    top: "0",
    width: "100%",
  },
  imageBox: {
    backgroundImage: `url(${cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  shadeBox: {
    backgroundColor: `${APP_THEME_PALETTE_PRIMARY_MAIN}44`,
  },
}));

export default function HomePageCover() {
  const classes = useStyles();

  return (
    <>
      <Box className={combineClasses([classes.coverBox, classes.imageBox])} />
      <Box className={combineClasses([classes.coverBox, classes.shadeBox])} />
    </>
  );
}
