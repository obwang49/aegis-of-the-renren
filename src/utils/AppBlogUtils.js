/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { RecoilState } from "recoil";

import { atom, useRecoilState } from "recoil";

const AppBlogCount: RecoilState<number> = atom({
  key: "AppBlogCount",
  default: 0,
});

export function useAppBlogCount(): {
  blogCount: number,
  setBlogCount: (number) => void,
} {
  const [blogCount, setBlogCount] = useRecoilState(AppBlogCount);
  return { blogCount, setBlogCount };
}
