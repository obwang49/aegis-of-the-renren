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
import EmailIcon from "@material-ui/icons/Email";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const APP_EMAIL_URL = "mailto:obwang49@gmail.com";

const itemText = Object.freeze({
  cn: "Email",
  eng: "Email",
});

type Props = {
  onClose: () => void,
};

export default function NavBarAppSideDrawerEmailLinkItem({ onClose }: Props) {
  const itemTextByLanguage = useValueByAppLanguage(itemText);

  const signIn = () => {
    window.open(APP_EMAIL_URL, "_blank");
    onClose();
  };

  return (
    <ListItem button onClick={signIn}>
      <ListItemIcon>
        <EmailIcon />
      </ListItemIcon>
      <ListItemText primary={itemTextByLanguage} />
    </ListItem>
  );
}
