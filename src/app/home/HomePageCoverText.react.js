/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, styled } from "@material-ui/core/styles";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const coverTextTop = Object.freeze({
  cn: "朝花夕拾",
  eng: "Ready For",
});
const coverTextBottom = Object.freeze({
  cn: "一如年少模样",
  eng: "Flashbacks?",
});

const CoverTextTypography = styled(Typography)({
  color: "white",
  fontSize: "min( 20vmin, 15vw )",
  fontWeight: "bold",
});

const useStyles = makeStyles((theme) => ({
  textBox: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  dividerBox: {
    height: theme.spacing(2),
  },
}));

export default function HomePageCoverText() {
  const classes = useStyles();

  const coverTextTopByLanguage = useValueByAppLanguage(coverTextTop);
  const coverTextBottomByLanguage = useValueByAppLanguage(coverTextBottom);

  return (
    <Box className={classes.textBox}>
      <CoverTextTypography noWrap variant="h1">
        {coverTextTopByLanguage}
      </CoverTextTypography>
      <Box className={classes.dividerBox} />
      <CoverTextTypography noWrap variant="h1">
        {coverTextBottomByLanguage}
      </CoverTextTypography>
    </Box>
  );
}
