/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import HomePageSignInDialog from "../home/HomePageSignInDialog.react";

const itemText = Object.freeze({
  cn: "登录",
  eng: "Sign In",
});

const useStyles = makeStyles((theme) => ({
  listItem: {
    ...theme.mixins.toolbar,
  },
}));

export default function NavBarAppSideDrawerUserItem() {
  const classes = useStyles();

  const itemTextByLanguage = useValueByAppLanguage(itemText);

  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);
  const toggleSignInDiaglog = () => {
    setIsSignInDialogOpen(!isSignInDialogOpen);
  };

  return (
    <>
      <ListItem
        button
        className={classes.toolbar}
        onClick={toggleSignInDiaglog}
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary={itemTextByLanguage} />
      </ListItem>
      <HomePageSignInDialog
        isOpen={isSignInDialogOpen}
        onClose={toggleSignInDiaglog}
      />
    </>
  );
}
