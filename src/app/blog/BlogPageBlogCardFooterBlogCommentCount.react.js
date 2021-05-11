/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import CommentIcon from "@material-ui/icons/Comment";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import BlogPageBlogCardFooterIconItem from "./BlogPageBlogCardFooterIconItem.react";

const tooltipText = Object.freeze({
  cn: "评论数",
  eng: "Total Comments",
});

type Props = {
  blog: Blog,
};

export default function BlogPageBlogCardFooterBlogCommentCount({
  blog,
}: Props) {
  const { commentCount } = blog;

  const tooltipTextByLanguage = useValueByAppLanguage(tooltipText);

  return (
    <BlogPageBlogCardFooterIconItem
      icon={<CommentIcon />}
      text={commentCount}
      tooltipText={tooltipTextByLanguage}
    />
  );
}
