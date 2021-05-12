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
  useAppBlogCount,
  useAppBlogList,
  useAppBlogListListener,
} from "../../utils/AppBlogUtils";
import AppLoadingBackdrop from "../AppLoadingBackdrop.react";
import BlogPageBlogCard from "./BlogPageBlogCard.react";
import BlogPageMenuDrawer from "./BlogPageMenuDrawer.react";
import BlogPageNoBlogCard from "./BlogPageNoBlogCard.react";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    margin: theme.spacing(1),
  },
}));

export default function BlogPage() {
  const classes = useStyles();

  const { blogCount } = useAppBlogCount();
  const { blogList } = useAppBlogList();
  const { isLoading } = useAppBlogListListener();

  const renderBlogs = () => {
    if (!isLoading && blogCount === 0) {
      return <BlogPageNoBlogCard />;
    }

    return blogList?.map((blog, index) => (
      <Box className={classes.card} key={index}>
        <BlogPageBlogCard blog={blog} index={index} />
      </Box>
    ));
  };

  return (
    <>
      <Box className={classes.page}>{renderBlogs()}</Box>
      <BlogPageMenuDrawer />
      <AppLoadingBackdrop isLoading={isLoading} />
    </>
  );
}
