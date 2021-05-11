/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";

import { useAppBlogCount } from "../../utils/AppBlogUtils";
import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import ProfilePageInfoCard from "./ProfilePageInfoCard.react";
import ProfilePageBlogCountCardCheckoutButton from "./ProfilePageBlogCountCardCheckoutButton.react";

const titleText = Object.freeze({
  cn: "发布的日志数",
  eng: "Number of Blogs Posted",
});

export default function ProfilePageBlogCountCard() {
  const titleTextByLanguage = useValueByAppLanguage(titleText);

  const { blogCount, removeBlogCount } = useAppBlogCount();

  return (
    <ProfilePageInfoCard
      action={<ProfilePageBlogCountCardCheckoutButton />}
      avatarIcon={<DescriptionIcon />}
      onRefresh={removeBlogCount}
      subHeader={blogCount}
      title={titleTextByLanguage}
    />
  );
}
