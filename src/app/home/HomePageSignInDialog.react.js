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
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import HomePageSignInButton from "./HomePageSignInButton.react";

const titleText = Object.freeze({
  cn: "登陆人人账号",
  eng: "Sign In To RenRen Account",
});

const summaryText = Object.freeze({
  cn: "请按照以下步骤登录您的人人账号以访问个人数据",
  eng:
    "Please follow the steps below to sign in to your renren.com account, " +
    "in order to access your personal data.",
});

const useStyles = makeStyles((theme) => ({
  box: {
    bottom: theme.spacing(12),
    display: "flex",
    left: "0",
    justifyContent: "center",
    position: "absolute",
    right: "0",
  },
  actions: {
    justifyContent: "center",
  },
}));

export default function HomePageSignInDialog() {
  const classes = useStyles();

  const titleTextByLanguage = useValueByAppLanguage(titleText);
  const summaryTextByLanguage = useValueByAppLanguage(summaryText);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleDiaglog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <Box className={classes.box}>
      <HomePageSignInButton onClick={toggleDiaglog} />
      <Dialog onClose={toggleDiaglog} open={isDialogOpen}>
        <DialogTitle>{titleTextByLanguage}</DialogTitle>
        <DialogContent>
          <DialogContentText>{summaryTextByLanguage}</DialogContentText>
        </DialogContent>
        <DialogActions classes={{ root: classes.actions }}>
          <Button onClick={toggleDiaglog} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
