/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useRenRenAPIRequest } from "./RenRenAPIUtils";

/**
 * RenRen API 2.0 Overview - User Login Get
 *
 * + Documentation
 *   - @link: http://open.renren.com/wiki/V2/user/login/get
 */

const RENREN_API_REQUEST_PATH_USER_LOGIN_GET = "/v2/user/login/get";
const RENREN_API_REQUEST_METHOD_USER_LOGIN_GET = "GET";

const RENREN_API_RESPONSE_KEY_USER_LOGIN_GET_ID = "id";
const RENREN_API_RESPONSE_KEY_USER_LOGIN_GET_NAME = "name";

export function useRenRenAPIUserLoginGet(): {
  isRequestInFlight: boolean,
  userID: number,
  userName: string,
} {
  const { isRequestInFlight, data } = useRenRenAPIRequest(
    RENREN_API_REQUEST_PATH_USER_LOGIN_GET,
    RENREN_API_REQUEST_METHOD_USER_LOGIN_GET
  );
  const userID = data ? data[RENREN_API_RESPONSE_KEY_USER_LOGIN_GET_ID] : 0;
  const userName = data
    ? data[RENREN_API_RESPONSE_KEY_USER_LOGIN_GET_NAME]
    : "";

  return { isRequestInFlight, userID, userName };
}
