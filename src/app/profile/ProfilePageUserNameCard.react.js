/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { useAppProfileBlogCountLoader } from "../../utils/AppProfileUtils";
import {
  useAppSignInUserInfo,
  useAppSignInUserInfoLoader,
} from "../../utils/AppSignInUserUtils";
import ProfilePageCardRefreshButton from "./ProfilePageCardRefreshButton.react";

const titleText = Object.freeze({
  cn: "用户名",
  eng: "User Name",
});

export default function ProfilePageUserNameCard() {
  const titleTextByLanguage = useValueByAppLanguage(titleText);

  const { userName } = useAppSignInUserInfo();
  const { load: loadSignInUserInfo } = useAppSignInUserInfoLoader();
  const { load: loadProfileBlogCount } = useAppProfileBlogCountLoader();

  const refresh = () => {
    loadSignInUserInfo();
    loadProfileBlogCount();
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <AccountBoxIcon />
          </Avatar>
        }
        action={<ProfilePageCardRefreshButton onClick={refresh} />}
        title={titleTextByLanguage}
        subheader={userName}
      />
    </Card>
  );
}
