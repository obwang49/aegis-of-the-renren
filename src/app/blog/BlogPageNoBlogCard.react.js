/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const titleText = Object.freeze({
  cn: "记录显示您目前还没有发布过日志",
  eng: "Record shows you have not publish any blogs yet",
});

export default function BlogPageNoBlogCard() {
  const titleTextByLanguage = useValueByAppLanguage(titleText);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <ErrorIcon />
          </Avatar>
        }
        title={<Typography variant="h5">{titleTextByLanguage}</Typography>}
      />
    </Card>
  );
}
