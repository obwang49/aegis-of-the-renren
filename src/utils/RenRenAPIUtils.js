/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useEffect, useState } from "react";

import { useRenRenOauthInfo } from "./RenRenOauthUtils";

/**
 * RenRen API 2.0 Overview
 *
 * + Documentation
 *   - @link: http://open.renren.com/wiki/API2
 * + CORS
 *   - @issue: Blocked by CORS policy: No 'Access-Control-Allow-Origin' header
 *             is present on the requested resource.
 *   - @solution: CORS Proxy Servies
 *   - @link: https://allorigins.win/
 *   - @trade-off: Potential security issues with free public CORS proxies.
 */

const CORS_PROXY_URL = "https://api.allorigins.win/get?url=";

const RENREN_API_REQUEST_BASE_URL = "https://api.renren.com";

const RENREN_API_REQUEST_KEY_ACCESS_TOKEN = "access_token";

type RenRenAPIRequestParamsType = {
  [string]: string | number,
};

function getURLWithCORSProxy(url: string): string {
  return `${CORS_PROXY_URL}${encodeURIComponent(url)}`;
}

function getRenRenAPIRequestURL(
  path: string,
  params: RenRenAPIRequestParamsType,
  accessToken: string
): string {
  if (!accessToken) {
    return "";
  }

  const renrenAPIRequestURL = new URL(path, RENREN_API_REQUEST_BASE_URL);

  const searchParams = renrenAPIRequestURL.searchParams;
  searchParams.append(RENREN_API_REQUEST_KEY_ACCESS_TOKEN, accessToken);
  if (params) {
    Object.entries(params).map(([key, value]) =>
      searchParams.append(key, value)
    );
  }

  return getURLWithCORSProxy(renrenAPIRequestURL.href);
}

export function useRenRenAPIRequest(
  path: string,
  method: string,
  params: RenRenAPIRequestParamsType
): {
  isRequestInFlight: boolean,
  data: mixed,
  error: mixed,
} {
  const { accessToken } = useRenRenOauthInfo();

  const [isRequestInFlight, setIsRequestInFlight] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const requestURL = getRenRenAPIRequestURL(path, params, accessToken);

  useEffect(() => {
    if (!requestURL || isRequestInFlight || data || error) {
      return;
    }

    setIsRequestInFlight(true);
    fetch(requestURL, { method })
      .then((response) => response.json())
      .then((payload) => {
        setIsRequestInFlight(false);
        const { data, error } = parseCORSProxyPayload(payload);
        setData(data);
        setError(error);
      })
      .catch((error) => {
        setIsRequestInFlight(false);
        setError(error);
      });
  }, [
    requestURL,
    method,
    isRequestInFlight,
    setIsRequestInFlight,
    data,
    setData,
    error,
    setError,
  ]);

  return { isRequestInFlight, data, error };
}

function parseCORSProxyPayload(payload: mixed): { data: mixed, error: mixed } {
  const { contents, status } = payload;
  const { http_code } = status;

  if (http_code !== 200) {
    const error = { code: http_code };
    return { data: null, error: error };
  }

  const { response } = JSON.parse(contents);
  return { data: response, error: null };
}
