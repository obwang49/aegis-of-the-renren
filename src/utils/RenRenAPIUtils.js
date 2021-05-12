/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useState } from "react";

import { useAppAccessToken } from "./AppAccessTokenUtils";

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
  accessToken: string,
  path: string,
  params: RenRenAPIRequestParamsType
): string {
  const allParams = {
    ...(params ?? {}),
    [RENREN_API_REQUEST_KEY_ACCESS_TOKEN]: accessToken,
  };
  const isAllParamsReady = Object.values(allParams).every(Boolean);
  if (!isAllParamsReady) {
    return "";
  }

  const renrenAPIRequestURL = new URL(path, RENREN_API_REQUEST_BASE_URL);

  const searchParams = renrenAPIRequestURL.searchParams;
  Object.entries(allParams).map(([key, value]) =>
    searchParams.append(key, value)
  );

  return getURLWithCORSProxy(renrenAPIRequestURL.href);
}

export function useRenRenAPIRequest(
  path: string,
  method: string,
  params: RenRenAPIRequestParamsType
): {
  load: () => void,
  isLoading: boolean,
  data: mixed,
  error: mixed,
} {
  const { accessToken } = useAppAccessToken();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const requestURL = getRenRenAPIRequestURL(accessToken, path, params);

  const load = () => {
    if (!requestURL) {
      return;
    }

    setData(null);
    setError(null);
    setIsLoading(true);

    fetch(requestURL, { method })
      .then((response) => response.json())
      .then((payload) => {
        const { data, error } = parseCORSProxyPayload(payload);
        setData(data);
        setError(error);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  return { load, isLoading, data, error };
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
