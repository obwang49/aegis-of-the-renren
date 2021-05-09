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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const itemText = Object.freeze({
  cn: "登出",
  eng: "Log Out",
});

const useStyles = makeStyles((theme) => ({
  listItem: {
    ...theme.mixins.toolbar,
  },
}));

export default function NavBarAppSideDrawerLogOutItem() {
  const classes = useStyles();

  const itemTextByLanguage = useValueByAppLanguage(itemText);

  return (
    <ListItem button className={classes.toolbar} onClick={null}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary={itemTextByLanguage} />
    </ListItem>
  );
}
