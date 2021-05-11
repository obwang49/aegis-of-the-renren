/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import ShareIcon from "@material-ui/icons/Share";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import BlogPageBlogCardFooterIconItem from "./BlogPageBlogCardFooterIconItem.react";

const tooltipText = Object.freeze({
  cn: "分享数",
  eng: "Total Shares",
});

type Props = {
  blog: Blog,
};

export default function BlogPageBlogCardFooterBlogShareCount({ blog }: Props) {
  const { shareCount } = blog;

  const tooltipTextByLanguage = useValueByAppLanguage(tooltipText);

  return (
    <BlogPageBlogCardFooterIconItem
      icon={<ShareIcon />}
      text={shareCount}
      tooltipText={tooltipTextByLanguage}
    />
  );
}
