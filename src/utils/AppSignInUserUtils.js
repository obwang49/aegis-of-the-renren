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
import { useRenRenOauthInfo } from "./RenRenOauthUtils";

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

export function useAppSignInUserInfoLoader(): {
  load: () => void,
} {
  const { setUserID, setUserName } = useAppSignInUserInfo();
  const load = () => {
    setUserID(0);
    setUserName("");
  };

  return { load };
}

export function useAppSignInUserListener(): {
  isLoading: boolean,
  error: mixed,
} {
  const { accessToken } = useRenRenOauthInfo();

  const {
    load: loadData,
    isLoading,
    userID: newUserID,
    userName: newUserName,
    error,
  } = useRenRenAPIUserLoginGet();

  const { userID, setUserID, userName, setUserName } = useAppSignInUserInfo();
  const { load } = useAppSignInUserInfoLoader();

  useEffect(() => {
    if (!accessToken || isLoading || userID || userName || error) {
      return;
    }
    load();
    loadData();
  }, [accessToken, isLoading, userID, userName, error, load, loadData]);

  useEffect(() => {
    if (!newUserID || !newUserName) {
      return;
    }
    setUserID(newUserID);
    setUserName(newUserName);
  }, [newUserID, newUserName, setUserID, setUserName]);

  return { isLoading, error };
}
