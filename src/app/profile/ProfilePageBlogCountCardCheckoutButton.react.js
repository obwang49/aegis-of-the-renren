/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

import { useAppBlogCount } from "../../utils/AppBlogUtils";
import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { AppPathOption, useAppPath } from "../../utils/AppPathUtils";

const tooltipText = Object.freeze({
  cn: "前往查看",
  eng: "Checkout Now",
});

export default function ProfilePageBlogCountCardCheckoutButton() {
  const tooltipTextByLanguage = useValueByAppLanguage(tooltipText);

  const { blogCount } = useAppBlogCount();

  const { setAppPath } = useAppPath();
  const openBlogPage = () => {
    setAppPath(AppPathOption.blog);
  };

  return (
    <Tooltip
      arrow
      placement="bottom"
      title={tooltipTextByLanguage}
      TransitionComponent={Zoom}
    >
      <IconButton disabled={!blogCount} onClick={openBlogPage}>
        <OpenInBrowserIcon />
      </IconButton>
    </Tooltip>
  );
}
