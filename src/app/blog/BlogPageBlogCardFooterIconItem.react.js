/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textBox: {
    marginLeft: theme.spacing(1),
  },
}));

type Props = {
  icon: React.Node,
  text: string,
  tooltipText: string,
};

export default function BlogPageBlogCardFooterIconItem({
  icon,
  text,
  tooltipText,
}: Props) {
  const classes = useStyles();

  return (
    <>
      <Tooltip
        arrow
        placement="top"
        title={tooltipText}
        TransitionComponent={Zoom}
      >
        {icon}
      </Tooltip>
      <Box className={classes.textBox}>
        <Typography>{text}</Typography>
      </Box>
    </>
  );
}
