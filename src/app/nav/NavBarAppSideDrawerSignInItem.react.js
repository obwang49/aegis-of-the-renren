/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const itemText = Object.freeze({
  cn: "登录",
  eng: "Sign In",
});

const useStyles = makeStyles((theme) => ({
  listItem: {
    ...theme.mixins.toolbar,
  },
}));

type Props = {
  onClick: () => void,
  onClose: () => void,
};

export default function NavBarAppSideDrawerSignInItem({
  onClick,
  onClose,
}: Props) {
  const classes = useStyles();

  const itemTextByLanguage = useValueByAppLanguage(itemText);

  const signIn = () => {
    onClick();
    onClose();
  };

  return (
    <ListItem button className={classes.toolbar} onClick={signIn}>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary={itemTextByLanguage} />
    </ListItem>
  );
}
