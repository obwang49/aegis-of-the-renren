/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

import BlogPageBlogCardBlogContent from "./BlogPageBlogCardBlogContent.react";
import BlogPageBlogCardFooter from "./BlogPageBlogCardFooter.react";
import BlogPageBlogCardHeader from "./BlogPageBlogCardHeader.react";

type Props = {
  blog: Blog,
  index: number,
};

export default function BlogPageBlogCard({ blog, index }: Props) {
  return (
    <Card>
      <BlogPageBlogCardHeader blog={blog} index={index} />
      <Divider />
      <BlogPageBlogCardBlogContent blog={blog} />
      <Divider />
      <BlogPageBlogCardFooter blog={blog} />
    </Card>
  );
}
