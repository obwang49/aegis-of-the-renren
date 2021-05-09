/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import BoxNoUserDragOrSelect from "../common/BoxNoUserDragOrSelect.react";
import HomePageCover from "./HomePageCover.react";
import HomePageCoverText from "./HomePageCoverText.react";
import HomePageSignInButton from "./HomePageSignInButton.react";
import HomePageSignInDialog from "./HomePageSignInDialog.react";

const useStyles = makeStyles((theme) => ({
  body: {
    position: "relative",
  },
  signInButton: {
    bottom: "calc( 25vh - 10vw )",
    display: "flex",
    left: "0",
    justifyContent: "center",
    position: "absolute",
    right: "0",
  },
}));

export default function HomePage() {
  const classes = useStyles();

  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);
  const toggleSignInDiaglog = () => {
    setIsSignInDialogOpen(!isSignInDialogOpen);
  };

  return (
    <BoxNoUserDragOrSelect>
      <HomePageCover />
      <Box className={classes.body}>
        <HomePageCoverText />
      </Box>
      <Box className={classes.signInButton}>
        <HomePageSignInButton onClick={toggleSignInDiaglog} />
      </Box>
      <HomePageSignInDialog
        isOpen={isSignInDialogOpen}
        onClose={toggleSignInDiaglog}
      />
    </BoxNoUserDragOrSelect>
  );
}
