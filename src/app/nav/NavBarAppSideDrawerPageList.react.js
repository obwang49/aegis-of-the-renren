/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { useMemo } from "react";
import List from "@material-ui/core/List";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import DescriptionIcon from "@material-ui/icons/Description";
import HomeIcon from "@material-ui/icons/Home";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";

import { useAppAccessToken } from "../../utils/AppAccessTokenUtils";
import {
  AppPathOption,
  getValidAppPathOptions,
} from "../../utils/AppPathUtils";
import NavBarAppSideDrawerPageListItem from "./NavBarAppSideDrawerPageListItem.react";

const pageListItems = Object.freeze({
  home: {
    icon: <HomeIcon />,
    targetPage: AppPathOption.home,
    text: {
      cn: "首页",
      eng: "Home",
    },
  },
  profile: {
    icon: <AccountBoxIcon />,
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
  const { accessToken } = useAppAccessToken();
  const validAppPathOptions = getValidAppPathOptions(accessToken);
  const validPageListItmes = useMemo(() => {
    return Object.values(pageListItems).filter((page) =>
      validAppPathOptions.includes(page.targetPage)
    );
  }, [validAppPathOptions]);

  return (
    <List>
      {validPageListItmes.map((page) => {
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
