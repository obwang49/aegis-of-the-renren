/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Avatar from "@material-ui/core/Avatar";

import { useAppBlogPageInfo } from "../../utils/AppBlogUtils";

type Props = {
  index: number,
};

export default function BlogPageBlogCardHeaderAvatar({ index }: Props) {
  const { pageNumber, pageSize } = useAppBlogPageInfo();

  const blogIndex = pageNumber * pageSize + index + 1;

  return <Avatar>{blogIndex}</Avatar>;
}
