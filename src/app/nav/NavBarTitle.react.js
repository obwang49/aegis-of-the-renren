/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { useValueByAppPath } from "../../utils/AppPathUtils";

const titleText = Object.freeze({
  cn: {
    blog: "日志之守护",
    home: "人人之守护",
    profile: "个人资料之守护",
  },
  eng: {
    blog: "AEGIS OF THE BLOG",
    home: "AEGIS OF THE RENREN",
    profile: "AEGIS OF THE PROFILE",
  },
});

const TitleTextTypography = styled(Typography)({
  fontWeight: "bold",
});

export default function NavBarTitle() {
  const textByLanguage = useValueByAppLanguage(titleText);
  const textByPath = useValueByAppPath(textByLanguage);

  return <TitleTextTypography variant="h4">{textByPath}</TitleTextTypography>;
}
