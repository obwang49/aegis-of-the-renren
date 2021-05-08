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

import BoxNoUserDragOrSelect from "../common/BoxNoUserDragOrSelect.react";
import HomePageCover from "./HomePageCover.react";
import HomePageCoverText from "./HomePageCoverText.react";
import HomePageSignInDialog from "./HomePageSignInDialog.react";

const useStyles = makeStyles((theme) => ({
  body: {
    position: "relative",
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <BoxNoUserDragOrSelect>
      <HomePageCover />
      <Box className={classes.body}>
        <HomePageCoverText />
      </Box>
      <HomePageSignInDialog />
    </BoxNoUserDragOrSelect>
  );
}
