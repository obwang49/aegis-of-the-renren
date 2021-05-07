/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { useEffect } from "react";

import { useAppPathURLSearchParam } from "./AppURLSearchParamUtils";

export function useAppPath(): string {
  const {
    appPathURLSearchParam,
    setAppPathURLSearchParam,
  } = useAppPathURLSearchParam();

  useEffect(() => {
    if (!appPathURLSearchParam) {
      setAppPathURLSearchParam("home");
    }
  }, [appPathURLSearchParam, setAppPathURLSearchParam]);

  return appPathURLSearchParam;
}
