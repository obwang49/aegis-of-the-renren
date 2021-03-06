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

import FAQPageFAQCard from "./FAQPageFAQCard.react";
import { faqItems } from "./FAQPageFAQItems";

const useStyles = makeStyles((theme) => ({
  pageBox: {
    padding: theme.spacing(2),
  },
  cardBox: {
    marginBottom: theme.spacing(2),
    margin: theme.spacing(1),
    maxWidth: theme.spacing(80),
  },
}));

export default function FAQPage() {
  const classes = useStyles();

  return (
    <Box className={classes.pageBox}>
      {Object.entries(faqItems).map(([key, faq]) => {
        return (
          <Box className={classes.cardBox} key={key}>
            <FAQPageFAQCard faq={faq} />
          </Box>
        );
      })}
    </Box>
  );
}
