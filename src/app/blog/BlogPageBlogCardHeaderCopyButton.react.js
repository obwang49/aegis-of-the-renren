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
import FileCopyIcon from "@material-ui/icons/FileCopy";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const copyTooltipText = Object.freeze({
  cn: "复制",
  eng: "Copy",
});

type Props = {
  text: string,
};

export default function BlogPageBlogCardHeaderCopyButton({ text }: Props) {
  const copyTooltipTextByLanguage = useValueByAppLanguage(copyTooltipText);

  return (
    <Tooltip
      arrow
      disabled
      placement="bottom"
      title={copyTooltipTextByLanguage}
      TransitionComponent={Zoom}
    >
      <IconButton>
        <FileCopyIcon />
      </IconButton>
    </Tooltip>
  );
}
