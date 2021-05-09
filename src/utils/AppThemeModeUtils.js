/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useAppThemeModeCookie } from "./AppCookieUtils";

type AppThemeModeOptionType = "dark" | "light";
export const AppThemeModeOption = Object.freeze({
  dark: "dark",
  light: "light",
});
const DEFAULT_APP_THEME_MODE_OPTION = AppThemeModeOption.light;

function getValidAppThemeModeOption(
  appThemeMode: string,
  isPrefersDarkMode: boolean
): string {
  if (!appThemeMode) {
    return isPrefersDarkMode
      ? AppThemeModeOption.dark
      : AppThemeModeOption.light;
  }

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
  const isPrefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const { appThemeModeCookie, setAppThemeModeCookie } = useAppThemeModeCookie();

  const appThemeMode = getValidAppThemeModeOption(
    appThemeModeCookie,
    isPrefersDarkMode
  );
  if (appThemeMode !== appThemeModeCookie) {
    setAppThemeModeCookie(appThemeMode);
  }

  return {
    appThemeMode,
    setAppThemeMode: setAppThemeModeCookie,
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
