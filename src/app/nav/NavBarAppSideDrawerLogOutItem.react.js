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

type Props = {
  onClose: () => void,
};

export default function NavBarAppSideDrawerLogOutItem({ onClose }: Props) {
  const classes = useStyles();

  const itemTextByLanguage = useValueByAppLanguage(itemText);

  const logOut = () => {
    onClose();
  };

  return (
    <ListItem button className={classes.toolbar} onClick={logOut}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary={itemTextByLanguage} />
    </ListItem>
  );
}
