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
import NavBarAppSideDrawerPageItem from "./NavBarAppSideDrawerPageItem.react";

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

export default function NavBarAppSideDrawerPageList() {
  return (
    <List>
      {Object.values(pageListItems).map((page) => {
        const { icon, targetPage, text } = page;
        return (
          <NavBarAppSideDrawerPageItem
            icon={icon}
            targetPage={targetPage}
            text={text}
          />
        );
      })}
    </List>
  );
}
