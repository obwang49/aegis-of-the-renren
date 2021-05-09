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

import { useRenRenAPIUserLoginGet } from "./RenRenAPIUserUtils";

const AppSignInUserID: RecoilState<number> = atom({
  key: "AppSignInUserID",
  default: 0,
});

const AppSignInUserName: RecoilState<string> = atom({
  key: "AppSignInUserName",
  default: "",
});

export function useAppSignInUserInfo(): {
  userID: number,
  setUserID: (number) => void,
  userName: string,
  setUserName: (string) => void,
} {
  const [userID, setUserID] = useRecoilState(AppSignInUserID);
  const [userName, setUserName] = useRecoilState(AppSignInUserName);
  return { userID, setUserID, userName, setUserName };
}

export function useAppSignInUserInfoLoader(): { isLoading: boolean } {
  const { isRequestInFlight, userID, userName } = useRenRenAPIUserLoginGet();
  const { setUserID, setUserName } = useAppSignInUserInfo();

  useEffect(() => {
    if (isRequestInFlight || !userID || !userName) {
      return;
    }

    setUserID(userID);
    setUserName(userName);
  }, [isRequestInFlight, userID, userName, setUserID, setUserName]);

  return { isLoading: isRequestInFlight };
}
