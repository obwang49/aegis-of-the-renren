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

export function useAppProfileBlogCountLoader(): {
  load: () => void,
  isLoading: boolean,
  error: mixed,
} {
  const { userID } = useAppSignInUserInfo();

  const {
    load: loadData,
    isLoading,
    blogCount,
    error,
  } = useRenRenAPIProfileGet(userID);

  const { setBlogCount, removeBlogCount } = useAppBlogCount();

  const load = () => {
    removeBlogCount();
    loadData();
  };

  useEffect(() => {
    if (blogCount === null) {
      return;
    }
    setBlogCount(blogCount);
  }, [blogCount, setBlogCount]);

  return { load, isLoading, error };
}

export function useAppProfileBlogCountListener(): { isLoading: boolean } {
  const { userID } = useAppSignInUserInfo();

  const { load, isLoading } = useAppProfileBlogCountLoader();

  const { blogCount } = useAppBlogCount();

  useEffect(() => {
    if (isLoading || blogCount !== null) {
      return;
    }
    load();
  }, [userID, isLoading, blogCount, load]);

  return { isLoading };
}
