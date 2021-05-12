/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import BlogPageBlogCardFooterBlogAccessControl from "./BlogPageBlogCardFooterBlogAccessControl.react";
import BlogPageBlogCardFooterBlogCommentCount from "./BlogPageBlogCardFooterBlogCommentCount.react";
import BlogPageBlogCardFooterBlogCreateTime from "./BlogPageBlogCardFooterBlogCreateTime.react";
import BlogPageBlogCardFooterBlogShareCount from "./BlogPageBlogCardFooterBlogShareCount.react";
import BlogPageBlogCardFooterBlogViewCount from "./BlogPageBlogCardFooterBlogViewCount.react";

const useStyles = makeStyles((theme) => ({
  footer: {
    alignItems: "center",
    display: "flex",
    flexGrow: "1",
    justifyContent: "space-between",
  },
  group: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap"
  },
  item: {
    alignItems: "center",
    display: "flex",
    margin: theme.spacing(1),
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
  },
}));

type Props = {
  blog: Blog,
};

export default function BlogPageBlogCardFooter({ blog }: Props) {
  const classes = useStyles();

  return (
    <CardActions>
      <Box className={classes.footer}>
        <Box className={classes.group}>
          <Box className={classes.item}>
            <BlogPageBlogCardFooterBlogAccessControl blog={blog} />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box className={classes.item}>
            <BlogPageBlogCardFooterBlogCreateTime blog={blog} />
          </Box>
        </Box>
        <Box className={classes.group}>
          <Box className={classes.item}>
            <BlogPageBlogCardFooterBlogViewCount blog={blog} />
          </Box>
          <Box className={classes.item}>
            <BlogPageBlogCardFooterBlogCommentCount blog={blog} />
          </Box>
          <Box className={classes.item}>
            <BlogPageBlogCardFooterBlogShareCount blog={blog} />
          </Box>
        </Box>
      </Box>
    </CardActions>
  );
}
