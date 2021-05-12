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

import ProfilePageBlogCountCard from "./ProfilePageBlogCountCard.react";
import ProfilePageUserIDCard from "./ProfilePageUserIDCard.react";
import ProfilePageUserNameCard from "./ProfilePageUserNameCard.react";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(3),
  },
  cardBox: {
    marginBottom: theme.spacing(2),
    maxWidth: theme.spacing(50),
  },
}));

export default function ProfilePage() {
  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <Box className={classes.cardBox}>
        <ProfilePageUserIDCard />
      </Box>
      <Box className={classes.cardBox}>
        <ProfilePageUserNameCard />
      </Box>
      <Box className={classes.cardBox}>
        <ProfilePageBlogCountCard />
      </Box>
    </Box>
  );
}
