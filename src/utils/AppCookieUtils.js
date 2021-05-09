/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useCookies } from "react-cookie";

const APP_ACCESS_TOKEN_COOKIE_NAME = "access_token";
const APP_LANGUAGE_COOKIE_NAME = "language";
const APP_THEME_MODE_COOKIE_NAME = "theme_mode";

const defaultAppCookieOption = Object.freeze({
  maxAge: 2592000, // 1 month
  path: "/",
  secure: true,
});

type CookieOptionType = {
  maxAge: number,
};

function useAppCookieByName(
  name: string
): {
  cookie: string,
  setCookie: (string, CookieOptionType) => void,
  removeCookie: () => void,
} {
  const [appCookies, setAppCookie, removeAppCookie] = useCookies([name]);

  const cookie = appCookies[name] ?? "";
  const setCookie = (value: string, option: CookieOptionType) => {
    setAppCookie(name, value, { ...defaultAppCookieOption, ...option });
  };
  const removeCookie = () => {
    removeAppCookie(name);
  };

  return { cookie, setCookie, removeCookie };
}

export function useAppAccessTokenCookie(): {
  appAccessTokenCookie: string,
  setAppAccessTokenCookie: (string, CookieOptionType) => void,
  removeAppAccessTokenCookie: () => void,
} {
  const {
    cookie: appAccessTokenCookie,
    setCookie: setAppAccessTokenCookie,
    removeCookie: removeAppAccessTokenCookie,
  } = useAppCookieByName(APP_ACCESS_TOKEN_COOKIE_NAME);
  return {
    appAccessTokenCookie,
    setAppAccessTokenCookie,
    removeAppAccessTokenCookie,
  };
}

export function useAppLanguageCookie(): {
  appLanguageCookie: string,
  setAppLanguageCookie: (string, CookieOptionType) => void,
  removeAppLanguageCookie: () => void,
} {
  const {
    cookie: appLanguageCookie,
    setCookie: setAppLanguageCookie,
    removeCookie: removeAppLanguageCookie,
  } = useAppCookieByName(APP_LANGUAGE_COOKIE_NAME);
  return {
    appLanguageCookie,
    setAppLanguageCookie,
    removeAppLanguageCookie,
  };
}

export function useAppThemeModeCookie(): {
  appThemeModeCookie: string,
  setAppThemeModeCookie: (string, CookieOptionType) => void,
  removeAppThemeModeCookie: () => void,
} {
  const {
    cookie: appThemeModeCookie,
    setCookie: setAppThemeModeCookie,
    removeCookie: removeAppThemeModeCookie,
  } = useAppCookieByName(APP_THEME_MODE_COOKIE_NAME);
  return {
    appThemeModeCookie,
    setAppThemeModeCookie,
    removeAppThemeModeCookie,
  };
}
