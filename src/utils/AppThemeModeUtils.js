/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useEffect } from "react";

import { useAppThemeModeURLSearchParam } from "./AppURLSearchParamUtils";

type AppThemeModeOptionType = "light" | "dark";
export const AppThemeModeOption = Object.freeze({
  light: "light",
  dark: "dark",
});
const DEFAULT_APP_THEME_MODE_OPTION = AppThemeModeOption.light;

function getValidAppThemeModeOption(appThemeMode: string): string {
  const appThemeModeLower = appThemeMode.toLowerCase();
  const isAppThemeModeLowerOptionValid = Object.keys(
    AppThemeModeOption
  ).includes(appThemeModeLower);
  return isAppThemeModeLowerOptionValid
    ? appThemeModeLower
    : DEFAULT_APP_THEME_MODE_OPTION;
}

export function useAppThemeMode(): {
  appThemeMode: AppThemeModeOptionType,
  setAppThemeMode: (AppThemeModeOptionType) => void,
} {
  const {
    appThemeModeURLSearchParam,
    setAppThemeModeURLSearchParam,
  } = useAppThemeModeURLSearchParam();

  const appThemeMode = getValidAppThemeModeOption(appThemeModeURLSearchParam);

  useEffect(() => {
    if (appThemeMode !== appThemeModeURLSearchParam) {
      setAppThemeModeURLSearchParam(appThemeMode);
    }
  }, [appThemeMode, appThemeModeURLSearchParam, setAppThemeModeURLSearchParam]);

  return {
    appThemeMode,
    setAppThemeMode: setAppThemeModeURLSearchParam,
  };
}

export function useValueByAppThemeMode({ light, dark }): mixed {
  const { appThemeMode } = useAppThemeMode();
  switch (appThemeMode) {
    case AppThemeModeOption.light:
      return light;
    case AppThemeModeOption.dark:
      return dark;
    default:
      throw new TypeError(`Unsupported theme mode: ${appThemeMode}!`);
  }
}