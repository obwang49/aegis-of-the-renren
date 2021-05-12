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
import GitHubIcon from "@material-ui/icons/GitHub";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const APP_GITHUB_REPO_URL = "https://github.com/obwang49/aegis-of-the-renren";

const itemText = Object.freeze({
  cn: "Github",
  eng: "Github",
});

type Props = {
  onClose: () => void,
};

export default function NavBarAppSideDrawerGithubLinkItem({ onClose }: Props) {
  const itemTextByLanguage = useValueByAppLanguage(itemText);

  const signIn = () => {
    window.open(APP_GITHUB_REPO_URL, "_blank");
    onClose();
  };

  return (
    <ListItem button onClick={signIn}>
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary={itemTextByLanguage} />
    </ListItem>
  );
}
