/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import BlogPageBlogCardFooterIconItem from "./BlogPageBlogCardFooterIconItem.react";

const tooltipText = Object.freeze({
  cn: "浏览数",
  eng: "Total Views",
});

type Props = {
  blog: Blog,
};

export default function BlogPageBlogCardFooterViewCount({ blog }: Props) {
  const { viewCount } = blog;

  const tooltipTextByLanguage = useValueByAppLanguage(tooltipText);

  return (
    <BlogPageBlogCardFooterIconItem
      icon={<VisibilityIcon />}
      text={viewCount}
      tooltipText={tooltipTextByLanguage}
    />
  );
}
