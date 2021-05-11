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
import DescriptionIcon from "@material-ui/icons/Description";

import { useAppBlogCount } from "../../utils/AppBlogUtils";
import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import ProfilePageCardRefreshButton from "./ProfilePageCardRefreshButton.react";

const titleText = Object.freeze({
  cn: "发布的日志数",
  eng: "Number of Blogs Posted",
});

export default function ProfilePageBlogCountCard() {
  const titleTextByLanguage = useValueByAppLanguage(titleText);

  const { blogCount, removeBlogCount } = useAppBlogCount();

  return (
    <Card>
      <CardHeader
        action={<ProfilePageCardRefreshButton onClick={removeBlogCount} />}
        avatar={
          <Avatar>
            <DescriptionIcon />
          </Avatar>
        }
        subheader={blogCount}
        title={titleTextByLanguage}
      />
    </Card>
  );
}