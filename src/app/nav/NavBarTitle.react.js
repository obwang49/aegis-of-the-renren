/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { useValueByAppPath } from "../../utils/AppPathUtils";

const TITLE_TEXT_VARIANT = "h4";
const titleText = Object.freeze({
  cn: {
    home: "人人之守护",
  },
  eng: {
    home: "AEGIS OF THE RENREN",
  },
});

export default function NavBarTitle() {
  const appTheme = useTheme();
  const textTheme = createMuiTheme({
    typography: {
      [TITLE_TEXT_VARIANT]: {
        fontFamily: appTheme.typography.fontFamily,
        fontWeight: "bold",
      },
    },
  });

  const textByLanguage = useValueByAppLanguage(titleText);
  const textByPath = useValueByAppPath(textByLanguage);

  return (
    <ThemeProvider theme={textTheme}>
      <Typography noWrap variant={TITLE_TEXT_VARIANT}>
        {textByPath}
      </Typography>
    </ThemeProvider>
  );
}
