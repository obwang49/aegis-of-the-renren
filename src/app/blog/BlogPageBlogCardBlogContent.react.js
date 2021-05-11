/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { Blog } from "../../utils/RenRenAPIBlogUtils";

import React from "react";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

type Props = {
  blog: Blog,
};

export default function BlogPageBlogCardBlogContent({ blog }: Props) {
  const theme = useTheme();

  const { content: contentText } = blog;

  const content = ReactHtmlParser(contentText);

  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const toggleContentExpansion = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  return (
    <CardActionArea onClick={toggleContentExpansion}>
      <Collapse
        in={isContentExpanded}
        timeout="auto"
        collapsedHeight={theme.spacing(20)}
      >
        <CardContent>
          <Typography variant="body">{content}</Typography>
        </CardContent>
      </Collapse>
    </CardActionArea>
  );
}
