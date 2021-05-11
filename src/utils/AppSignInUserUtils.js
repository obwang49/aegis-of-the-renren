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

import { useAppAccessToken } from "./AppAccessTokenUtils";
import { useRenRenAPIUserLoginGet } from "./RenRenAPIUserUtils";

const AppSignInUserID: RecoilState<number> = atom({
  key: "AppSignInUserID",
  default: 0,
});

const AppSignInUserName: RecoilState<string> = atom({
  key: "AppSignInUserName",
  default: "--",
});

export function useAppSignInUserInfo(): {
  userID: number,
  setUserID: (number) => void,
  userName: string,
  setUserName: (string) => void,
  removeUserInfo: () => void,
} {
  const [userID, setUserID] = useRecoilState(AppSignInUserID);
  const [userName, setUserName] = useRecoilState(AppSignInUserName);
  const removeUserInfo = () => {
    setUserID(0);
    setUserName("");
  };
  return { userID, setUserID, userName, setUserName, removeUserInfo };
}

export function useAppSignInUserInfoLoader(): {
  load: () => void,
  isLoading: boolean,
  error: mixed,
} {
  const {
    load: loadData,
    isLoading,
    userID,
    userName,
    error,
  } = useRenRenAPIUserLoginGet();

  const { setUserID, setUserName, removeUserInfo } = useAppSignInUserInfo();

  const load = () => {
    removeUserInfo();
    loadData();
  };

  useEffect(() => {
    if (!userID || !userName) {
      return;
    }
    setUserID(userID);
    setUserName(userName);
  }, [userID, userName, setUserID, setUserName]);

  return { load, isLoading, error };
}

export function useAppSignInUserInfoListener(): { isLoading: boolean } {
  const { accessToken } = useAppAccessToken();

  const { load, isLoading } = useAppSignInUserInfoLoader();

  const { userID } = useAppSignInUserInfo();

  useEffect(() => {
    if (isLoading || userID) {
      return;
    }
    load();
  }, [accessToken, isLoading, userID, load]);

  return { isLoading };
}

export function useAppSignInUserSignOut(): {
  signOut: () => void,
} {
  const { removeAccessToken } = useAppAccessToken();
  const { removeUserInfo } = useAppSignInUserInfo();

  const signOut = () => {
    removeAccessToken();
    removeUserInfo();
  };
  return { signOut };
}
