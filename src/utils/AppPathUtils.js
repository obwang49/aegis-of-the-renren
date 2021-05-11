/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useEffect } from "react";

import { useAppAccessToken } from "./AppAccessTokenUtils";
import { useAppPathURLSearchParam } from "./AppURLSearchParamUtils";

export type AppPathOptionType = "blog" | "faq" | "home" | "profile";
export const AppPathOption = Object.freeze({
  blog: "blog",
  faq: "faq",
  home: "home",
  profile: "profile",
});
const DEFAULT_APP_PATH_OPTION_NO_ACCESS_TOKEN = AppPathOption.home;
const DEFAULT_APP_PATH_OPTION_WITH_ACCESS_TOKEN = AppPathOption.profile;
const validAppPathOptions = Object.freeze({
  noAccessToken: [AppPathOption.faq, AppPathOption.home],
  withAccessToken: [
    AppPathOption.blog,
    AppPathOption.faq,
    AppPathOption.profile,
  ],
});

export function getValidAppPathOptions(accessToken: string): Array<string> {
  return accessToken
    ? validAppPathOptions.withAccessToken
    : validAppPathOptions.noAccessToken;
}

function getValidAppPathOption(appPath: string, accessToken: string): string {
  const defaultAppPathOption = accessToken
    ? DEFAULT_APP_PATH_OPTION_WITH_ACCESS_TOKEN
    : DEFAULT_APP_PATH_OPTION_NO_ACCESS_TOKEN;

  if (!appPath) {
    return defaultAppPathOption;
  }

  const appPathLower = appPath.toLowerCase();
  const appPathValidOptions = getValidAppPathOptions(accessToken);
  const isAppPathLowerOptionValid = appPathValidOptions.includes(appPathLower);
  return isAppPathLowerOptionValid ? appPathLower : defaultAppPathOption;
}

export function useAppPath(): {
  appPath: AppPathOptionType,
  setAppPath: (AppPathOptionType) => void,
} {
  const {
    appPathURLSearchParam,
    setAppPathURLSearchParam,
  } = useAppPathURLSearchParam();

  const { accessToken } = useAppAccessToken();

  const appPath = getValidAppPathOption(appPathURLSearchParam, accessToken);

  return {
    appPath,
    setAppPath: setAppPathURLSearchParam,
  };
}

export function useAppPathSyncer(): void {
  const {
    appPathURLSearchParam,
    setAppPathURLSearchParam,
  } = useAppPathURLSearchParam();

  const { appPath } = useAppPath();

  useEffect(() => {
    if (appPath !== appPathURLSearchParam) {
      setAppPathURLSearchParam(appPath);
    }
  }, [appPath, appPathURLSearchParam, setAppPathURLSearchParam]);
}

export function useValueByAppPath({ blog, faq, home, profile }): mixed {
  const { appPath } = useAppPath();
  switch (appPath) {
    case AppPathOption.blog:
      return blog;
    case AppPathOption.faq:
      return faq;
    case AppPathOption.home:
      return home;
    case AppPathOption.profile:
      return profile;
    default:
      throw new Error(`Unsupported path: ${appPath}!`);
  }
}
