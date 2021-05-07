/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { APP_THEME_PALETTE_PRIMARY_MAIN } from "../App.react";

import cover from "../../assets/cover.png";

const useStyles = makeStyles((theme) => ({
  cover: {
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
  },
  image: {
    backgroundImage: `url(${cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  shade: {
    backgroundColor: `${APP_THEME_PALETTE_PRIMARY_MAIN}44`,
  },
}));

export default function HomePageCover() {
  const classes = useStyles();

  return (
    <>
      <div className={[classes.cover, classes.image].join(" ")} />
      <div className={[classes.cover, classes.shade].join(" ")} />
    </>
  );
}
