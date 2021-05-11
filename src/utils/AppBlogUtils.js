/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { RecoilState } from "recoil";
import type { Blog } from "./RenRenAPIBlogUtils";

import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

import { useAppSignInUserInfo } from "./AppSignInUserUtils";

import {
  RENREN_API_REQUEST_VALUE_PAGE_SIZE_DEFAULT,
  useRenRenAPIBlogList,
} from "./RenRenAPIBlogUtils";

const AppBlogCount: RecoilState<?number> = atom({
  key: "AppBlogCount",
  default: null,
});

const AppBlogPageNumber: RecoilState<number> = atom({
  key: "AppBlogPageNumber",
  default: 0,
});

const AppBlogPageSize: RecoilState<number> = atom({
  key: "AppBlogPageSize",
  default: RENREN_API_REQUEST_VALUE_PAGE_SIZE_DEFAULT,
});

const AppBlogList: RecoilState<?Array<Blog>> = atom({
  key: "AppBlogList",
  default: null,
});

export function useAppBlogCount(): {
  blogCount: ?number,
  setBlogCount: (?number) => void,
  removeBlogCount: () => void,
} {
  const [blogCount, setBlogCount] = useRecoilState(AppBlogCount);
  const removeBlogCount = () => {
    setBlogCount(null);
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

export function useAppBlogList(): {
  blogList: ?Array<Blog>,
  setBlogList: (?Array<Blog>) => void,
  removeBlogList: () => void,
} {
  const [blogList, setBlogList] = useRecoilState(AppBlogList);
  const removeBlogList = () => {
    setBlogList(null);
  };
  return { blogList, setBlogList, removeBlogList };
}

function useAppBlogListLoader(): {
  load: () => void,
  isLoading: boolean,
  error: mixed,
} {
  const { userID } = useAppSignInUserInfo();
  const { pageNumber, pageSize } = useAppBlogPageInfo();
  const pageNumberForRenRenAPI = pageNumber + 1;

  const { load: loadData, isLoading, blogList, error } = useRenRenAPIBlogList(
    userID,
    pageNumberForRenRenAPI,
    pageSize
  );

  const { setBlogList, removeBlogList } = useAppBlogList();

  const load = () => {
    removeBlogList();
    loadData();
  };

  useEffect(() => {
    if (blogList === null) {
      return;
    }
    setBlogList(blogList);
  }, [blogList, setBlogList]);

  return { load, isLoading, error };
}

export function useAppBlogListListener(): {
  isLoading: boolean,
} {
  const { pageNumber, pageSize } = useAppBlogPageInfo();

  const { load, isLoading } = useAppBlogListLoader();

  const { blogList } = useAppBlogList();

  useEffect(() => {
    if (isLoading || blogList !== null) {
      return;
    }
    load();
  }, [pageNumber, pageSize, isLoading, blogList, load]);

  return { isLoading };
}
