/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { useValueByAppLanguage } from "../utils/AppLanguageUtils";
import BoxNoUserDragOrSelect from "./common/BoxNoUserDragOrSelect.react";

const backdropText = Object.freeze({
  cn: "努力加载中...",
  eng: "Working Hard Loading...",
});

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.tooltip + 1,
  },
  textBox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  backdropText: {
    marginTop: theme.spacing(1),
  },
}));

type Props = {
  isLoading: boolean,
};

export default function AppLoadingBackdrop({ isLoading }: Props) {
  const classes = useStyles();

  const backdropTextByLanguage = useValueByAppLanguage(backdropText);

  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <BoxNoUserDragOrSelect>
        <Box className={classes.textBox}>
          <CircularProgress color="inherit" />
          <Typography className={classes.backdropText}>
            {backdropTextByLanguage}
          </Typography>
        </Box>
      </BoxNoUserDragOrSelect>
    </Backdrop>
  );
}
