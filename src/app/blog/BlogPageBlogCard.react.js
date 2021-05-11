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
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import BlogPageBlogCardCopyButton from "./BlogPageBlogCardCopyButton.react";

const useStyles = makeStyles((theme) => ({
  contentPreview: {
    height: theme.spacing(30),
    overflow: "hidden",
  },
  card: {
    margin: theme.spacing(1),
  },
}));

type Props = {
  blog: Blog,
  index: number,
};

export default function ProfilePageBlogCountCard({ blog, index }: Props) {
  const theme = useTheme();
  const classes = useStyles();

  const {
    accessControl,
    commentCount,
    content: contentText,
    createTime,
    id,
    shareCount,
    title,
    type,
    viewCount,
  } = blog;

  const createTimeText = createTime.slice(0, -4); // 2008-08-08 08:08:08:000
  const contentPreviewText = contentText.slice(0, 200);

  const content = ReactHtmlParser(contentText);

  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const toggleContentExpansion = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  return (
    <Card>
      <CardHeader
        action={<BlogPageBlogCardCopyButton />}
        avatar={<Avatar>{index + 1}</Avatar>}
        subheader={createTimeText}
        title={<Typography variant="h6">{title}</Typography>}
      />
      <CardActionArea onClick={toggleContentExpansion}>
      <Collapse in={isContentExpanded} timeout="auto" collapsedHeight={theme.spacing(20)}>
        <CardContent >
          <Typography variant="body">
            {content}
          </Typography>
        </CardContent>
      </Collapse>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton
          onClick={toggleContentExpansion}
          aria-expanded={isContentExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
