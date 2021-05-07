/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Typography from "@material-ui/core/Typography";

type Props = {
  text: string,
};

export default function NavBarTitle({ text }: Props) {
  return (
    <Typography noWrap variant="h4">
      {text}
    </Typography>
  );
}
