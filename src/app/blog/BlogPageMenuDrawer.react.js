/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";

import { useAppBlogCount, useAppBlogPageInfo } from "../../utils/AppBlogUtils";
import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const pageSizeLabelText = Object.freeze({
  cn: "每页日志数",
  eng: "Blogs Per Page",
});

const useStyles = makeStyles((theme) => ({
  drawer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function BlogPageMenuDrawer({ loadPage }: Props) {
  const classes = useStyles();

  const pageSizeLabelTextByLanguage = useValueByAppLanguage(pageSizeLabelText);

  const { blogCount } = useAppBlogCount();

  const {
    pageNumber,
    setPageNumber,
    pageSize,
    setPageSize,
    pageSizeOptions,
  } = useAppBlogPageInfo();

  const changePageNumber = (event: mixed, pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  const changePageSize = (event: mixed) => {
    const newPageSize = event.target.value;
    setPageSize(newPageSize);
    setPageNumber(0);
  };

  return (
    <Drawer anchor="bottom" variant="permanent">
      <Box className={classes.drawer}>
        <TablePagination
          component="div"
          count={blogCount}
          labelRowsPerPage={pageSizeLabelTextByLanguage}
          onChangePage={changePageNumber}
          onChangeRowsPerPage={changePageSize}
          page={pageNumber}
          rowsPerPage={pageSize}
          rowsPerPageOptions={pageSizeOptions}
        />
      </Box>
    </Drawer>
  );
}
