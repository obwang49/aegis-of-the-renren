/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import BoxNoUserDragOrSelect from "../common/BoxNoUserDragOrSelect.react";
import HomePageSignInRenRenButton from "./HomePageSignInRenRenButton.react";
import HomePageSignInStepper from "./HomePageSignInStepper.react";

const titleText = Object.freeze({
  cn: "登陆人人账号",
  eng: "Sign In To RenRen Account",
});

const summaryText = Object.freeze({
  cn: "请依照以下步骤登录您的人人账号以访问个人数据",
  eng:
    "Please follow the steps below to sign in to your renren.com account, " +
    "in order to access your personal data.",
});

const useStyles = makeStyles((theme) => ({
  dialogActions: {
    justifyContent: "center",
  },
}));

type Props = {
  isOpen: boolean,
  onClose: () => void,
};

export default function HomePageSignInDialog({ isOpen, onClose }: Props) {
  const classes = useStyles();

  const titleTextByLanguage = useValueByAppLanguage(titleText);
  const summaryTextByLanguage = useValueByAppLanguage(summaryText);

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <BoxNoUserDragOrSelect>
        <DialogTitle>{titleTextByLanguage}</DialogTitle>
        <DialogContent>
          <DialogContentText>{summaryTextByLanguage}</DialogContentText>
          <HomePageSignInStepper />
        </DialogContent>
        <DialogActions classes={{ root: classes.dialogActions }}>
          <HomePageSignInRenRenButton />
        </DialogActions>
      </BoxNoUserDragOrSelect>
    </Dialog>
  );
}
