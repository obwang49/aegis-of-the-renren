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
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import {
  AppThemeModeOption,
  useAppThemeMode,
  useValueByAppThemeMode,
} from "../../utils/AppThemeModeUtils";

const tooltipText = Object.freeze({
  cn: "在亮色和暗色主题间切换",
  eng: "Toggle light/dark theme",
});

export default function NavBarAppThemeModeButton() {
  const tooltipTextByLanguage = useValueByAppLanguage(tooltipText);

  const iconByThemeMode = useValueByAppThemeMode({
    light: <Brightness4Icon />,
    dark: <Brightness7Icon />,
  });

  const { appThemeMode, setAppThemeMode } = useAppThemeMode();
  const toggleAppThemeMode = () => {
    switch (appThemeMode) {
      case AppThemeModeOption.light:
        setAppThemeMode(AppThemeModeOption.dark);
        return;
      case AppThemeModeOption.dark:
        setAppThemeMode(AppThemeModeOption.light);
        return;
      default:
        return;
    }
  };

  return (
    <Tooltip
      arrow
      placement="bottom"
      title={tooltipTextByLanguage}
      TransitionComponent={Zoom}
    >
      <IconButton color="inherit" onClick={toggleAppThemeMode}>
        {iconByThemeMode}
      </IconButton>
    </Tooltip>
  );
}
