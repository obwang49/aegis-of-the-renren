/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import { useAppBlogCount } from "../../utils/AppBlogUtils";
import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { useAppSignInUserInfo } from "../../utils/AppSignInUserUtils";
import ProfilePageInfoCard from "./ProfilePageInfoCard.react";

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
    <ProfilePageInfoCard
      avatarIcon={<AccountBoxIcon />}
      onRefresh={refresh}
      subHeader={userID}
      title={titleTextByLanguage}
    />
  );
}
