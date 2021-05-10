/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useEffect } from "react";

import { useAppBlogCount } from "./AppBlogUtils";
import { useAppSignInUserInfo } from "./AppSignInUserUtils";
import { useRenRenAPIProfileGet } from "./RenRenAPIProfileUtils";
import { useRenRenOauthInfo } from "./RenRenOauthUtils";

export function useAppProfileBlogCountLoader(): {
  load: () => void,
} {
  const { setBlogCount } = useAppBlogCount();

  const load = () => {
    setBlogCount(0);
  };

  return { load };
}

export function useAppProfileBlogCountListener(): {
  isLoading: boolean,
  error: mixed,
} {
  const { accessToken } = useRenRenOauthInfo();
  const { userID } = useAppSignInUserInfo();

  const {
    load: loadData,
    isLoading,
    blogCount: newBlogCount,
    error,
  } = useRenRenAPIProfileGet(userID);

  const { blogCount, setBlogCount } = useAppBlogCount();
  const { load } = useAppProfileBlogCountLoader();

  useEffect(() => {
    if (!accessToken || !userID || isLoading || blogCount || error) {
      return;
    }
    load();
    loadData();
  }, [accessToken, userID, isLoading, blogCount, error, load, loadData]);

  useEffect(() => {
    if (!newBlogCount) {
      return;
    }
    setBlogCount(newBlogCount);
  }, [newBlogCount, setBlogCount]);

  return { isLoading, error };
}
