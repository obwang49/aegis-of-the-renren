/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import List from "@material-ui/core/List";
import DescriptionIcon from "@material-ui/icons/Description";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

import { AppPathOption } from "../../utils/AppPathUtils";
import NavBarAppSideDrawerPageListItem from "./NavBarAppSideDrawerPageListItem.react";

const pageListItems = Object.freeze({
  profile: {
    icon: <PermContactCalendarIcon />,
    targetPage: AppPathOption.profile,
    text: {
      cn: "个人资料",
      eng: "Profile",
    },
  },
  blog: {
    icon: <DescriptionIcon />,
    targetPage: AppPathOption.blog,
    text: {
      cn: "日志",
      eng: "Blog",
    },
  },
  faq: {
    icon: <LiveHelpIcon />,
    targetPage: AppPathOption.faq,
    text: {
      cn: "常见问题",
      eng: "FAQ",
    },
  },
});

type Props = {
  onClose: () => void,
};

export default function NavBarAppSideDrawerPageList({ onClose }: Props) {
  return (
    <List>
      {Object.values(pageListItems).map((page) => {
        const { icon, targetPage, text } = page;
        return (
          <NavBarAppSideDrawerPageListItem
            icon={icon}
            key={targetPage}
            onClose={onClose}
            targetPage={targetPage}
            text={text}
          />
        );
      })}
    </List>
  );
}
