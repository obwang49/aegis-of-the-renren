/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import LockIcon from "@material-ui/icons/Lock";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { BlogAccessControlOption } from "../../utils/RenRenAPIBlogUtils";
import BlogPageBlogCardFooterIconItem from "./BlogPageBlogCardFooterIconItem.react";

const tooltipText = Object.freeze({
  cn: "隐私设置",
  eng: "Privacy Setting",
});

const blogAccessControlText = Object.freeze({
  [BlogAccessControlOption.FRIEND]: {
    cn: "仅好友可见",
    eng: "Friends Only",
  },
  [BlogAccessControlOption.PASSWORD]: {
    cn: "密码访问",
    eng: "Password Access",
  },
  [BlogAccessControlOption.PRIVATE]: {
    cn: "仅自己可见",
    eng: "Yourself Only",
  },
  [BlogAccessControlOption.PUBLIC]: {
    cn: "公开",
    eng: "Public",
  },
});

type Props = {
  blog: Blog,
};

export default function BlogPageBlogCardFooterBlogAccessControl({
  blog,
}: Props) {
  const { accessControl } = blog;

  const tooltipTextByLanguage = useValueByAppLanguage(tooltipText);

  const accessControlText = blogAccessControlText[accessControl];
  const accessControlTextByLanguage = useValueByAppLanguage(accessControlText);

  return (
    <BlogPageBlogCardFooterIconItem
      icon={<LockIcon />}
      text={accessControlTextByLanguage}
      tooltipText={tooltipTextByLanguage}
    />
  );
}
