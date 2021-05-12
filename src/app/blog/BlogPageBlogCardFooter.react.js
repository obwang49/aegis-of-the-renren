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
  footerBox: {
    alignItems: "center",
    display: "flex",
    flexGrow: "1",
    justifyContent: "space-between",
  },
  groupBox: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  itemBox: {
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
      <Box className={classes.footerBox}>
        <Box className={classes.groupBox}>
          <Box className={classes.itemBox}>
            <BlogPageBlogCardFooterBlogAccessControl blog={blog} />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box className={classes.itemBox}>
            <BlogPageBlogCardFooterBlogCreateTime blog={blog} />
          </Box>
        </Box>
        <Box className={classes.groupBox}>
          <Box className={classes.itemBox}>
            <BlogPageBlogCardFooterBlogViewCount blog={blog} />
          </Box>
          <Box className={classes.itemBox}>
            <BlogPageBlogCardFooterBlogCommentCount blog={blog} />
          </Box>
          <Box className={classes.itemBox}>
            <BlogPageBlogCardFooterBlogShareCount blog={blog} />
          </Box>
        </Box>
      </Box>
    </CardActions>
  );
}
