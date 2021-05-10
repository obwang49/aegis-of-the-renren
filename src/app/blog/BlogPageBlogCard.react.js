/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import DescriptionIcon from "@material-ui/icons/Description";

type Props = {
  blog: Blog,
};

export default function ProfilePageBlogCountCard({ blog }: Props) {
  const { id, title } = blog;

  return (
    <Card>
      <CardHeader
        action={null}
        avatar={
          <Avatar>
            <DescriptionIcon />
          </Avatar>
        }
        subheader={id}
        title={title}
      />
    </Card>
  );
}
