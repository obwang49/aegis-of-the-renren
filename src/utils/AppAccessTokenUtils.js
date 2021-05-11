/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { RecoilState } from "recoil";

import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

import { useAppAccessTokenCookie } from "./AppCookieUtils";

const AppAccessToken: RecoilState<?string> = atom({
  key: "AppAccessToken",
  default: null,
});

export function useAppAccessToken(): {
  accessToken: ?string,
  setAccessToken: (?string) => void,
  removeAccessToken: () => void,
} {
  const [accessToken, setAccessToken] = useRecoilState(AppAccessToken);
  const removeAccessToken = () => {
    setAccessToken(null);
  };
  return { accessToken, setAccessToken, removeAccessToken };
}

export function useAppAccessTokenSyncer(): void {
  const { appAccessTokenCookie } = useAppAccessTokenCookie();
  const { accessToken, setAccessToken } = useAppAccessToken();

  useEffect(() => {
    if (appAccessTokenCookie !== accessToken) {
      setAccessToken(appAccessTokenCookie);
    }
  }, [appAccessTokenCookie, accessToken, setAccessToken]);
}
