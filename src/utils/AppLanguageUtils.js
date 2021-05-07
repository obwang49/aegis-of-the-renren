/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useEffect } from "react";

import { useAppLanguageURLSearchParam } from "./AppURLSearchParamUtils";

export type AppLanguageOptionType = "cn" | "eng";
export const AppLanguageOption = Object.freeze({
  cn: "cn",
  eng: "eng",
});
const DEFAULT_APP_LANGUAGE_OPTION = AppLanguageOption.cn;

function getValidAppLanguageOption(appLanguage: string): string {
  const appLanguageLower = appLanguage.toLowerCase();
  const isAppLanguageLowerOptionValid = Object.keys(AppLanguageOption).includes(
    appLanguageLower
  );
  return isAppLanguageLowerOptionValid
    ? appLanguageLower
    : DEFAULT_APP_LANGUAGE_OPTION;
}

export function useAppLanguage(): {
  appLanguage: AppLanguageOptionType,
  setAppLanguage: (AppLanguageOptionType) => void,
} {
  const {
    appLanguageURLSearchParam,
    setAppLanguageURLSearchParam,
  } = useAppLanguageURLSearchParam();

  const appLanguage = getValidAppLanguageOption(appLanguageURLSearchParam);

  useEffect(() => {
    if (appLanguage !== appLanguageURLSearchParam) {
      setAppLanguageURLSearchParam(appLanguage);
    }
  }, [appLanguage, appLanguageURLSearchParam, setAppLanguageURLSearchParam]);

  return {
    appLanguage,
    setAppLanguage: setAppLanguageURLSearchParam,
  };
}
