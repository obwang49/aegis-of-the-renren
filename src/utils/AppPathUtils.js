/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useEffect } from "react";

import { useAppPathURLSearchParam } from "./AppURLSearchParamUtils";

export type AppPathOptionType = "home" | "profile" | "blog";
export const AppPathOption = Object.freeze({
  home: "home",
  profile: "profile",
  blog: "blog",
});
const DEFAULT_APP_PATH_OPTION = AppPathOption.home;

function getValidAppPathOption(appPath: string): string {
  const appPathLower = appPath.toLowerCase();
  const isAppPathLowerOptionValid = Object.keys(AppPathOption).includes(
    appPathLower
  );
  return isAppPathLowerOptionValid ? appPathLower : DEFAULT_APP_PATH_OPTION;
}

export function useAppPath(): {
  appPath: AppPathOptionType,
  setAppPath: (AppPathOptionType) => void,
} {
  const {
    appPathURLSearchParam,
    setAppPathURLSearchParam,
  } = useAppPathURLSearchParam();

  const appPath = getValidAppPathOption(appPathURLSearchParam);

  useEffect(() => {
    if (appPath !== appPathURLSearchParam) {
      setAppPathURLSearchParam(appPath);
    }
  }, [appPath, appPathURLSearchParam, setAppPathURLSearchParam]);

  return {
    appPath,
    setAppPath: setAppPathURLSearchParam,
  };
}

export function useValueByAppPath({ blog, home, profile }): mixed {
  const { appPath } = useAppPath();
  switch (appPath) {
    case AppPathOption.blog:
      return blog;
    case AppPathOption.home:
      return home;
    case AppPathOption.profile:
      return profile;
    default:
      throw new TypeError(`Unsupported path: ${appPath}!`);
  }
}
