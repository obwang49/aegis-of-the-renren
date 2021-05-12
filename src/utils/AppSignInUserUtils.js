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
import { useRenRenOauthInfo } from "./RenRenOauthUtils";

const AppSignInUserID: RecoilState<?number> = atom({
  key: "AppSignInUserID",
  default: null,
});

const AppSignInUserName: RecoilState<?string> = atom({
  key: "AppSignInUserName",
  default: null,
});

export function useAppSignInUserInfo(): {
  userID: ?number,
  setUserID: (?number) => void,
  userName: ?string,
  setUserName: (?string) => void,
  removeUserInfo: () => void,
} {
  const [userID, setUserID] = useRecoilState(AppSignInUserID);
  const [userName, setUserName] = useRecoilState(AppSignInUserName);
  const removeUserInfo = () => {
    setUserID(null);
    setUserName(null);
  };
  return {
    userID,
    setUserID,
    userName,
    setUserName,
    removeUserInfo,
  };
}

function useAppSignInUserInfoLoader(): {
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
    if (userID == null || userName == null) {
      return;
    }
    setUserID(userID);
    setUserName(userName);
  }, [error, userID, userName, setUserID, setUserName]);

  return { load, isLoading, error };
}

export function useAppSignInUserInfoListener(): { isLoading: boolean } {
  const { accessToken } = useAppAccessToken();

  const { load, isLoading, error } = useAppSignInUserInfoLoader();

  const { userID } = useAppSignInUserInfo();

  // Nuke Invalid Access Token
  const { removeAppAccessToken } = useRenRenOauthInfo();
  useEffect(() => {
    if (error) {
      removeAppAccessToken();
    }
  }, [error, removeAppAccessToken]);

  useEffect(() => {
    if (isLoading || userID != null) {
      return;
    }
    load();
  }, [accessToken, isLoading, userID, load]);

  return { isLoading };
}

export function useAppSignInUserSignOut(): {
  signOut: () => void,
} {
  const { removeAppAccessToken } = useRenRenOauthInfo();
  const { removeUserInfo } = useAppSignInUserInfo();

  const signOut = () => {
    removeAppAccessToken();
    removeUserInfo();
  };
  return { signOut };
}
