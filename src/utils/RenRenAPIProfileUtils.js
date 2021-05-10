/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useRenRenAPIRequest } from "./RenRenAPIUtils";

/**
 * RenRen API 2.0 Overview - Profile Get
 *
 * + Documentation
 *   - @link: http://open.renren.com/wiki/V2/profile/get
 */

const RENREN_API_REQUEST_PATH_PROFILE_GET = "/v2/profile/get";
const RENREN_API_REQUEST_METHOD_PROFILE_GET = "GET";
const RENREN_API_REQUEST_KEY_PROFILE_GET_USER_ID = "userId";

const RENREN_API_RESPONSE_KEY_PROFILE_GET_BLOG_COUNT = "blogCount";

export function useRenRenAPIProfileGet(
  userID: number
): {
  load: () => void,
  isLoading: boolean,
  blogCount: number,
  error: mixed,
} {
  const {
    load,
    isLoading,
    data,
    error,
  } = useRenRenAPIRequest(
    RENREN_API_REQUEST_PATH_PROFILE_GET,
    RENREN_API_REQUEST_METHOD_PROFILE_GET,
    { [RENREN_API_REQUEST_KEY_PROFILE_GET_USER_ID]: userID }
  );
  const blogCount = data
    ? data[RENREN_API_RESPONSE_KEY_PROFILE_GET_BLOG_COUNT]
    : 0;

  return { load, isLoading, blogCount, error };
}
