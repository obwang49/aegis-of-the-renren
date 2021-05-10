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
import RefreshIcon from "@material-ui/icons/Refresh";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const refreshTooltipText = Object.freeze({
  cn: "刷新数据",
  eng: "Refresh data",
});

type Props = {
  onClick: () => void,
};

export default function ProfilePageCardRefreshButton({ onClick }: Props) {
  const refreshTooltipTextByLanguage = useValueByAppLanguage(
    refreshTooltipText
  );

  return (
    <Tooltip
      arrow
      placement="bottom"
      title={refreshTooltipTextByLanguage}
      TransitionComponent={Zoom}
    >
      <IconButton onClick={onClick}>
        <RefreshIcon />
      </IconButton>
    </Tooltip>
  );
}
