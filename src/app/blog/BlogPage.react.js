/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import {
  useAppBlogListLoader,
  useAppBlogPageInfo,
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

  const { pageNumber, pageSize } = useAppBlogPageInfo();
  const { load: loadPage, isLoading, blogs } = useAppBlogListLoader();

  useEffect(() => {
    loadPage();
  }, [pageNumber, pageSize, loadPage]);

  return (
    <>
      <Box className={classes.page}>
        {blogs.map((blog, index) => (
          <Box className={classes.card} key={index}>
            <BlogPageBlogCard blog={blog} />
          </Box>
        ))}
      </Box>
      <BlogPageMenuDrawer />
    </>
  );
}
