/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { AppPathOptionType } from "../../utils/AppLanguageUtils";

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { useAppPath } from "../../utils/AppPathUtils";

type Props = {
  icon: React.Node,
  targetPage: AppPathOptionType,
  text: mixed,
};

export default function NavBarAppSideDrawerPageItem({
  icon,
  targetPage,
  text,
}: Props) {
  const textByLanguage = useValueByAppLanguage(text);

  const { setAppPath } = useAppPath();
  const openTargetPage = () => {
    setAppPath(targetPage);
  };

  return (
    <ListItem button onClick={openTargetPage}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={textByLanguage} />
    </ListItem>
  );
}
