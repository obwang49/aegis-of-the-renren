/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

import { styleNoUserDragOrSelect } from "../common/BoxNoUserDragOrSelect.react";

import sign_in from "../../assets/sign_in.png";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
  },
  img: {
    ...styleNoUserDragOrSelect,
    height: theme.spacing(4),
    width: "auto",
  },
}));

export default function HomePageSignInRenRenButton() {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.button} focusRipple onClick={() => {}}>
      <img alt="404" className={classes.img} src={sign_in} />
    </ButtonBase>
  );
}
