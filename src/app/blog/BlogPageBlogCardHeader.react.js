/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import BlogPageBlogCardHeaderAvatar from "./BlogPageBlogCardHeaderAvatar.react";
import BlogPageBlogCardHeaderCopyButton from "./BlogPageBlogCardHeaderCopyButton.react";

type Props = {
  blog: Blog,
  index: number,
};

export default function BlogPageBlogCardHeader({ blog, index }: Props) {
  const { title } = blog;

  return (
    <CardHeader
      action={<BlogPageBlogCardHeaderCopyButton />}
      avatar={<BlogPageBlogCardHeaderAvatar index={index} />}
      title={<Typography variant="h5">{title}</Typography>}
    />
  );
}
