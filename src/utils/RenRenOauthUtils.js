/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useAppAccessToken } from "./AppAccessTokenUtils";
import { useAppAccessTokenCookie } from "./AppCookieUtils";

/**
 * RenRen Oauth 2.0 Overview
 *
 * + Documentation
 *   - @link: http://open.renren.com/wiki/OAuth2.0
 * + Permission List
 *   -  http://open.renren.com/wiki/English_version_for_Permission_List
 */

const AGIES_OF_THE_RENREN_APP_BASE_URL = "https://obwang49.github.io";
const AGIES_OF_THE_RENREN_APP_API_KEY = "c3810b73b4b14ba594967c670f87ece6";

const RENREN_OAUTH_REQUEST_BASE_URL = "https://graph.renren.com";
const RENREN_OAUTH_REQUEST_PATH = "/oauth/authorize";

const RENREN_OAUTH_REQUEST_KEY_CLIENT_ID = "client_id";
const RENREN_OAUTH_REQUEST_KEY_DISPLAY = "display";
const RENREN_OAUTH_REQUEST_KEY_REDIRECT_URI = "redirect_uri";
const RENREN_OAUTH_REQUEST_KEY_RESPONSE_TYPE = "response_type";
const RENREN_OAUTH_REQUEST_KEY_SCOPE = "scope";

const RENREN_OAUTH_REQUEST_VALUE_DISPLAY = "page";
const RENREN_OAUTH_REQUEST_VALUE_RESPONSE_TYPE = "token";

const renrenOauthRequestPermissions = Object.freeze({
  read_user_blog: "read_user_blog",
});

const RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN = "access_token";
const RENREN_OAUTH_RESPONSE_KEY_EXPIRES_IN = "expires_in";
const RENREN_OAUTH_RESPONSE_KEY_SCOPE = "scope";
const RENREN_OAUTH_RESPONSE_VALUE_SCOPE_SEPARATOR = "+";

type RenRenOauthInfo = {
  [RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN]: string,
  [RENREN_OAUTH_RESPONSE_KEY_EXPIRES_IN]: number,
  [RENREN_OAUTH_RESPONSE_KEY_SCOPE]: Array<string>,
};

function getRenRenOauthRequestValueRedirectURI(
  pathname: string,
  search: string
): string {
  const redirectURL = new URL(pathname, AGIES_OF_THE_RENREN_APP_BASE_URL);
  redirectURL.search = search;
  return redirectURL.href;
}

function getRenRenOauthRequestValueScope(): string {
  const scope = Object.values(renrenOauthRequestPermissions).join(" ");
  return scope;
}

export function useRenRenOauthRequestURL(): string {
  const { pathname, search } = useLocation();
  const redirectURI = getRenRenOauthRequestValueRedirectURI(pathname, search);

  const scope = getRenRenOauthRequestValueScope();

  const renrenOauthRequestURL = new URL(
    RENREN_OAUTH_REQUEST_PATH,
    RENREN_OAUTH_REQUEST_BASE_URL
  );

  const searchParams = renrenOauthRequestURL.searchParams;
  searchParams.append(
    RENREN_OAUTH_REQUEST_KEY_CLIENT_ID,
    AGIES_OF_THE_RENREN_APP_API_KEY
  );
  searchParams.append(
    RENREN_OAUTH_REQUEST_KEY_DISPLAY,
    RENREN_OAUTH_REQUEST_VALUE_DISPLAY
  );
  searchParams.append(RENREN_OAUTH_REQUEST_KEY_REDIRECT_URI, redirectURI);
  searchParams.append(
    RENREN_OAUTH_REQUEST_KEY_RESPONSE_TYPE,
    RENREN_OAUTH_REQUEST_VALUE_RESPONSE_TYPE
  );
  searchParams.append(RENREN_OAUTH_REQUEST_KEY_SCOPE, scope);

  return renrenOauthRequestURL.href;
}

function parseRenRenOauthResponseURLHash(hash: string): RenRenOauthInfo {
  const oauthInfoURLSearchParams = new URLSearchParams(hash.slice(1));

  const accessToken =
    oauthInfoURLSearchParams.get(RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN) ?? "";

  const expiresInValue =
    oauthInfoURLSearchParams.get(RENREN_OAUTH_RESPONSE_KEY_EXPIRES_IN) ?? "";
  const expiresInNumber = parseInt(expiresInValue);
  const expiresIn = isNaN(expiresInNumber) ? 0 : expiresInNumber;

  const scopeValue =
    oauthInfoURLSearchParams.get(RENREN_OAUTH_RESPONSE_KEY_SCOPE) ?? "";
  const scope = scopeValue
    .split(RENREN_OAUTH_RESPONSE_VALUE_SCOPE_SEPARATOR)
    .filter(Boolean);

  return {
    [RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN]: accessToken,
    [RENREN_OAUTH_RESPONSE_KEY_EXPIRES_IN]: expiresIn,
    [RENREN_OAUTH_RESPONSE_KEY_SCOPE]: scope,
  };
}

export function useRenRenOauthResponseListener(): void {
  const history = useHistory();
  const location = useLocation();

  const { setAppAccessToken } = useRenRenOauthInfo();

  useEffect(() => {
    const { hash } = location;
    if (!hash) {
      return;
    }

    const oauthInfo = parseRenRenOauthResponseURLHash(hash);
    setAppAccessToken(oauthInfo);
    history.replace({ hash: "" });
  }, [location, setAppAccessToken, history]);
}

export function useRenRenOauthInfo(): {
  setAppAccessToken: (RenRenOauthInfo) => void,
  removeAppAccessToken: () => void,
} {
  const {
    setAppAccessTokenCookie,
    removeAppAccessTokenCookie,
  } = useAppAccessTokenCookie();

  const { setAccessToken, removeAccessToken } = useAppAccessToken();

  const setAppAccessToken = (newOauthInfo: RenRenOauthInfo) => {
    const {
      [RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN]: accessToken,
      [RENREN_OAUTH_RESPONSE_KEY_EXPIRES_IN]: expiresIn,
    } = newOauthInfo;

    if (!accessToken) {
      removeAppAccessTokenCookie();
      removeAccessToken();
    } else {
      setAppAccessTokenCookie(accessToken, {
        maxAge: expiresIn,
      });
      setAccessToken(accessToken);
    }
  };

  const removeAppAccessToken = () => {
    removeAppAccessTokenCookie();
    removeAccessToken();
  };

  return {
    setAppAccessToken,
    removeAppAccessToken,
  };
}
