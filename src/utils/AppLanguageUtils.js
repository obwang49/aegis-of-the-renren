/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useEffect } from "react";

import { useAppLanguageCookie } from "./AppCookieUtils";

export type AppLanguageOptionType = "cn" | "eng";
export const AppLanguageOption = Object.freeze({
  cn: "cn",
  eng: "eng",
});
const DEFAULT_APP_LANGUAGE_OPTION = AppLanguageOption.cn;

function getValidAppLanguageOption(appLanguage: string): AppLanguageOptionType {
  if (!appLanguage) {
    return DEFAULT_APP_LANGUAGE_OPTION;
  }

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
  const { appLanguageCookie, setAppLanguageCookie } = useAppLanguageCookie();

  const appLanguage = getValidAppLanguageOption(appLanguageCookie);

  useEffect(() => {
    if (appLanguage !== appLanguageCookie) {
      setAppLanguageCookie(appLanguage);
    }
  }, [appLanguage, appLanguageCookie, setAppLanguageCookie]);

  return {
    appLanguage,
    setAppLanguage: setAppLanguageCookie,
  };
}

export function useAppLanguageSyncer(): void {
  const { appLanguageCookie, setAppLanguageCookie } = useAppLanguageCookie();
  const { appLanguage } = useAppLanguage();

  useEffect(() => {
    if (appLanguage !== appLanguageCookie) {
      setAppLanguageCookie(appLanguage);
    }
  }, [appLanguage, appLanguageCookie, setAppLanguageCookie]);
}

export function useValueByAppLanguage({ cn, eng }): mixed {
  const { appLanguage } = useAppLanguage();
  switch (appLanguage) {
    case AppLanguageOption.cn:
      return cn;
    case AppLanguageOption.eng:
      return eng;
    default:
      throw new Error(`Unsupported language: ${appLanguage}!`);
  }
}
