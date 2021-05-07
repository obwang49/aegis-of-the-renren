/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  children: ?React.Node,
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    MozUserSelect: "none",
    msUserSelect: "none",
    UserDrag: "none",
    UserSelect: "none",
    WebkitUserDrag: "none",
    WebkitUserSelect: "none",
  },
}));

export default function DivNoUserDragOrSelect({ children }: Props) {
  const classes = useStyles();

  return <div className={classes.wrapper}>{children}</div>;
}
