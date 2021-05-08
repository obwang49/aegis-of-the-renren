/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const buttonText = Object.freeze({
  cn: "即刻开启",
  eng: "Enter Now",
});

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 50,
    height: theme.spacing(6),
  },
}));

type Props = {
  onClick: () => void,
};

export default function HomePageSignInButton({ onClick }: Props) {
  const classes = useStyles();

  const buttonTextByLanguage = useValueByAppLanguage(buttonText);

  return (
    <Button
      className={classes.button}
      color="secondary"
      endIcon={<FlightTakeoffIcon style={{ fontSize: "2rem" }} />}
      onClick={onClick}
      variant="contained"
    >
      <Typography noWrap variant="h4">
        {buttonTextByLanguage}
      </Typography>
    </Button>
  );
}
