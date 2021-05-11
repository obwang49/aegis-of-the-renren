/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useRenRenAPIRequest } from "./RenRenAPIUtils";

/**
 * RenRen API 2.0 Overview - Blog List
 *
 * + Documentation
 *   - @link: http://open.renren.com/wiki/V2/blog/list
 */

const RENREN_API_REQUEST_PATH_BLOG_LIST = "v2/blog/list";
const RENREN_API_REQUEST_METHOD_BLOG_LIST = "GET";
const RENREN_API_REQUEST_KEY_OWNER_ID = "ownerId";
const RENREN_API_REQUEST_KEY_PAGE_NUMBER = "pageNumber";
const RENREN_API_REQUEST_KEY_PAGE_SIZE = "pageSize";
export const RENREN_API_REQUEST_VALUE_PAGE_SIZE_DEFAULT = 10;

const RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_ACCESS_CONTROL = "accessControl";
const RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_COMMENT_COUNT = "commentCount";
const RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_CONTENT = "content";
const RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_CREATE_TIME = "createTime";
const RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_ID = "id";
const RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_SHARE_COUNT = "shareCount";
const RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_TITLE = "title";
const RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_TYPE = "type";
const RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_VIEW_COUNT = "viewCount";

type BlogAccessControlOptionType = "FRIEND" | "PASSWORD" | "PRIVATE" | "PUBLIC";
export const BlogAccessControlOption = Object.freeze({
  FRIEND: "FRIEND",
  PASSWORD: "PASSWORD",
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
});

type BlogTypeOptionType =
  | "TYPE_API"
  | "TYPE_DEFAULT"
  | "TYPE_OTHER"
  | "TYPE_RSS"
  | "TYPE_WAP";
export const BlogTypeOption = Object.freeze({
  TYPE_API: "TYPE_API",
  TYPE_DEFAULT: "TYPE_DEFAULT",
  TYPE_OTHER: "TYPE_OTHER",
  TYPE_RSS: "TYPE_RSS",
  TYPE_WAP: "TYPE_WAP",
});

type Blog = {
  [RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_ACCESS_CONTROL]: BlogAccessControlOptionType,
  [RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_COMMENT_COUNT]: number,
  [RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_CONTENT]: string,
  [RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_CREATE_TIME]: string,
  [RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_ID]: number,
  [RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_SHARE_COUNT]: number,
  [RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_TITLE]: string,
  [RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_TYPE]: BlogTypeOptionType,
  [RENREN_API_RESPONSE_KEY_BLOG_LIST_BLOG_VIEW_COUNT]: number,
};

export function useRenRenAPIBlogList(
  ownerID: number,
  pageNumber: number,
  pageSize: number
): {
  load: () => void,
  isLoading: boolean,
  blogList: ?Array<Blog>,
  error: mixed,
} {
  const { load, isLoading, data, error } = useRenRenAPIRequest(
    RENREN_API_REQUEST_PATH_BLOG_LIST,
    RENREN_API_REQUEST_METHOD_BLOG_LIST,
    {
      [RENREN_API_REQUEST_KEY_OWNER_ID]: ownerID,
      [RENREN_API_REQUEST_KEY_PAGE_NUMBER]: pageNumber,
      [RENREN_API_REQUEST_KEY_PAGE_SIZE]: pageSize,
    }
  );
  const blogList = data;

  return { load, isLoading, blogList, error };
}
