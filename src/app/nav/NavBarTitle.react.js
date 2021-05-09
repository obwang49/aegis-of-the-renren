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
  blog: { cn: "日志之守护", eng: "AEGIS OF THE BLOG" },
  faq: { cn: "常见问题之守护", eng: "AEGIS OF THE FAQ" },
  home: { cn: "人人之守护", eng: "AEGIS OF THE RENREN" },
  profile: { cn: "个人资料之守护", eng: "AEGIS OF THE PROFILE" },
});

const TitleTextTypography = styled(Typography)({
  fontWeight: "bold",
});

export default function NavBarTitle() {
  const textByPath = useValueByAppPath(titleText);
  const textByLanguage = useValueByAppLanguage(textByPath);

  return (
    <TitleTextTypography variant="h4">{textByLanguage}</TitleTextTypography>
  );
}
