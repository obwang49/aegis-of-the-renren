/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

import sign_in from "../../assets/sign_in.png";

const useStyles = makeStyles((theme) => ({
  box: {
    //borderRadius: 50,
    height: theme.spacing(4),
    width: "15vw",
    backgroundImage: `url(${sign_in})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  button: {
    backgroundColor: "tansparent",
    margin: "0",
    padding: "0",
  },
}));

export default function HomePageSignInRenRenButton() {
  const classes = useStyles();

  return (
    <Button
      className={classes.box}
      color="secondary"
      onClick={() => alert("!!!")}
      variant="contained"
    />
  );
}
