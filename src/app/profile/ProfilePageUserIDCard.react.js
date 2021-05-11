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
import Skeleton from "@material-ui/lab/Skeleton";

import { useAppBlogCount } from "../../utils/AppBlogUtils";
import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { useAppSignInUserInfo } from "../../utils/AppSignInUserUtils";
import ProfilePageCardRefreshButton from "./ProfilePageCardRefreshButton.react";

const titleText = Object.freeze({
  cn: "用户 ID",
  eng: "User ID",
});

export default function ProfilePageUserIDCard() {
  const titleTextByLanguage = useValueByAppLanguage(titleText);

  const { userID, removeUserInfo } = useAppSignInUserInfo();
  const { removeBlogCount } = useAppBlogCount();

  const refresh = () => {
    removeUserInfo();
    removeBlogCount();
  };

  return (
    <Card>
      <CardHeader
        action={<ProfilePageCardRefreshButton onClick={refresh} />}
        avatar={
          <Avatar>
            <AccountBoxIcon />
          </Avatar>
        }
        subheader={userID ?? <Skeleton animation="wave" width="40%" />}
        title={titleTextByLanguage}
      />
    </Card>
  );
}
