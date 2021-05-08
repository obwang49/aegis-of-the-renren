/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useCookies } from "react-cookie";
import { useHistory, useLocation } from "react-router-dom";

/**
 * RenRen Oauth2.0 Overview
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

export function useRenRenOauthRequestURL(): string {
  const { pathname, search } = useLocation();
  const redirectURI = getRenRenOauthRequestValueRedirectURI(pathname, search);

  const scope = Object.values(renrenOauthRequestPermissions).join(" ");

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

export function useRenRenOauthResponse(): void {
  const history = useHistory();
  const location = useLocation();

  const { setAccessToken } = useRenRenOauthInfo();

  const { hash } = location;
  if (!hash) {
    return;
  }

  const oauthInfo = parseRenRenOauthResponseURLHash(hash);
  setAccessToken(oauthInfo);
  history.replace({ ...location, hash: "" });
}

export function useRenRenOauthInfo(): {
  accessToken: string,
  setAccessToken: (RenRenOauthInfo) => void,
} {
  const [
    oauthInfoCookies,
    setOauthInfoCookie,
    removeOauthInfoCookie,
  ] = useCookies([RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN]);

  const accessToken =
    oauthInfoCookies[RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN] ?? "";
  const setAccessToken = (newOauthInfo: RenRenOauthInfo) => {
    const {
      [RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN]: newAccessToken,
      [RENREN_OAUTH_RESPONSE_KEY_EXPIRES_IN]: newExpiresIn,
    } = newOauthInfo;

    if (!newAccessToken) {
      removeOauthInfoCookie(RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN);
    } else {
      setOauthInfoCookie(
        RENREN_OAUTH_RESPONSE_KEY_ACCESS_TOKEN,
        newAccessToken,
        {
          maxAge: newExpiresIn,
          path: "/",
          secure: true,
        }
      );
    }
  };

  return { accessToken, setAccessToken };
}

/**
?la=cn&p=home&tm=light#access_token=600773%7C6.3c04eab2d05efae07179cf33f3c709a6.2592000.1623045600-341163407&expires_in=2594676&scope=read_user_message+send_notification+write_guestbook+send_request+read_user_album+read_user_checkin+read_user_status+send_message+read_user_notification+read_user_share+send_invitation+photo_upload+publish_comment+publish_blog+read_user_comment+create_album+read_user_guestbook+publish_share+read_user_like_history+operate_like+read_user_feed+read_user_photo+read_user_invitation+publish_checkin+status_update+read_user_request+publish_feed+read_user_blog
*/
