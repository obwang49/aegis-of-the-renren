/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useCallback, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

const APP_PATH_URL_SEARCH_PARAM_KEY = "path";

function useAppURLSearchParam(
  key: string
): {
  param: string,
  setParam: (string) => void,
} {
  const history = useHistory();
  const location = useLocation();

  const allParams = useMemo(() => {
    const { search } = location;
    return new URLSearchParams(search);
  }, [location]);

  const param = allParams.get(key) ?? "";
  const setParam = useCallback(
    (value: ?string) => {
      if (value) {
        allParams.set(key, value);
      } else {
        allParams.delete(key);
      }
      history.replace({ ...location, search: allParams.toString() });
    },
    [allParams, key, location, history]
  );
  return { param, setParam };
}

export function useAppPathURLSearchParam(): {
  appPathURLSearchParam: string,
  setAppPathURLSearchParam: (string) => void,
} {
  const {
    param: appPathURLSearchParam,
    setParam: setAppPathURLSearchParam,
  } = useAppURLSearchParam(APP_PATH_URL_SEARCH_PARAM_KEY);
  return {
    appPathURLSearchParam,
    setAppPathURLSearchParam,
  };
}
