/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const styleNoUserDragOrSelect = Object.freeze({
  MozUserSelect: "none",
  msUserSelect: "none",
  UserDrag: "none",
  UserSelect: "none",
  WebkitUserDrag: "none",
  WebkitUserSelect: "none",
});

export const useStyles = makeStyles((theme) => ({
  div: styleNoUserDragOrSelect,
}));

type Props = {
  children: ?React.Node,
};

export default function DivNoUserDragOrSelect({ children }: Props) {
  const classes = useStyles();

  return <div className={classes.div}>{children}</div>;
}
