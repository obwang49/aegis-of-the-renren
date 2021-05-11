/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { RecoilState } from "recoil";
import type { Blog } from "./RenRenAPIBlogUtils";

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
  removeBlogCount: () => void,
} {
  const [blogCount, setBlogCount] = useRecoilState(AppBlogCount);
  const removeBlogCount = () => {
    setBlogCount(0);
  };
  return { blogCount, setBlogCount, removeBlogCount };
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
  const pageNumberForRenRenAPI = pageNumber + 1;

  const { load: loadData, isLoading, blogs, error } = useRenRenAPIBlogList(
    userID,
    pageNumberForRenRenAPI,
    pageSize
  );

  const load = () => {
    if (!accessToken || !userID || !pageNumberForRenRenAPI || !pageSize) {
      return;
    }
    loadData();
  };

  return { load, isLoading, blogs, error };
}
