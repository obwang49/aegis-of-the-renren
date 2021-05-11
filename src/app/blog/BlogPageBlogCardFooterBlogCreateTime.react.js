/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import BlogPageBlogCardFooterIconItem from "./BlogPageBlogCardFooterIconItem.react";

const tooltipText = Object.freeze({
  cn: "发布时间",
  eng: "Publish Time",
});

type Props = {
  blog: Blog,
};

export default function BlogPageBlogCardFooterBlogCreateTime({ blog }: Props) {
  const { createTime } = blog; // 2013-05-19 22:08:48:000

  const tooltipTextByLanguage = useValueByAppLanguage(tooltipText);

  const createTimeText = createTime.split(" ")[0];

  return (
    <BlogPageBlogCardFooterIconItem
      icon={<CalendarTodayIcon />}
      text={createTimeText}
      tooltipText={tooltipTextByLanguage}
    />
  );
}
