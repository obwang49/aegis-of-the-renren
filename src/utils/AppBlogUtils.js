/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { RecoilState } from "recoil";
import type { Blog } from "./RenRenAPIBlogUtils";

import { useCallback, useMemo } from "react";
import { atom, useRecoilState } from "recoil";

import { useAppSignInUserInfo } from "./AppSignInUserUtils";
import { useRenRenOauthInfo } from "./RenRenOauthUtils";

import {
  RENREN_API_REQUEST_VALUE_PAGE_SIZE_DEFAULT,
  useRenRenAPIBlogList,
} from "./RenRenAPIBlogUtils";

const AppBlogCount: RecoilState<number> = atom({
  key: "AppBlogCount",
  default: 0,
});

const AppBlogPageNumber: RecoilState<number> = atom({
  key: "AppBlogPageNumber",
  default: 0,
});

const AppBlogPageSize: RecoilState<number> = atom({
  key: "AppBlogPageSize",
  default: RENREN_API_REQUEST_VALUE_PAGE_SIZE_DEFAULT,
});

export function useAppBlogCount(): {
  blogCount: number,
  setBlogCount: (number) => void,
} {
  const [blogCount, setBlogCount] = useRecoilState(AppBlogCount);
  return { blogCount, setBlogCount };
}

export function useAppProfileBlogCountLoader(): {
  load: () => void,
  isLoading: boolean,
} {
  const { setBlogCount } = useAppBlogCount();

  const load = () => {
    setBlogCount(0);
  };

  return { load };
}

function getPageSizeOptions(): Array<number> {
  return [5, 10, 15, 20];
}

export function useAppBlogPageInfo(): {
  pageNumber: number,
  setPageNumber: (number) => void,
  pageSize: number,
  setPageSize: (number) => void,
  pageSizeOptions: Array<number>,
} {
  const [pageNumber, setPageNumber] = useRecoilState(AppBlogPageNumber);
  const [pageSize, setPageSize] = useRecoilState(AppBlogPageSize);

  const pageSizeOptions = getPageSizeOptions();

  return {
    pageNumber,
    setPageNumber,
    pageSize,
    setPageSize,
    pageSizeOptions,
  };
}

export function useAppBlogListLoader(): {
  load: () => void,
  isLoading: boolean,
  blogs: Array<Blog>,
  error: mixed,
} {
  const { accessToken } = useRenRenOauthInfo();
  const { userID } = useAppSignInUserInfo();
  const { pageNumber, pageSize } = useAppBlogPageInfo();
  const pageNumberForRenRenAPI = useMemo(() => {
    return pageNumber + 1;
  }, [pageNumber]);

  const { load: loadData, isLoading, blogs, error } = useRenRenAPIBlogList(
    userID,
    pageNumberForRenRenAPI,
    pageSize
  );

  const load = useCallback(() => {
    if (!accessToken || !userID || !pageNumberForRenRenAPI || !pageSize) {
      return;
    }
    loadData();
  }, [accessToken, userID, pageNumberForRenRenAPI, pageSize, loadData]);

  return { load, isLoading, blogs, error };
}
