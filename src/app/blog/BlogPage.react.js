/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import {
  useAppBlogList,
  useAppBlogListListener,
} from "../../utils/AppBlogUtils";
import BlogPageBlogCard from "./BlogPageBlogCard.react";
import BlogPageMenuDrawer from "./BlogPageMenuDrawer.react";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: theme.spacing(2),
  },
  card: {
    margin: theme.spacing(1),
    width: theme.spacing(50),
  },
}));

export default function BlogPage() {
  const classes = useStyles();

  const { blogList } = useAppBlogList();
  const { isLoading } = useAppBlogListListener();

  return (
    <>
      <Box className={classes.page}>
        {blogList?.map((blog, index) => (
          <Box className={classes.card} key={index}>
            <BlogPageBlogCard blog={blog} />
          </Box>
        ))}
      </Box>
      <BlogPageMenuDrawer />
    </>
  );
}
