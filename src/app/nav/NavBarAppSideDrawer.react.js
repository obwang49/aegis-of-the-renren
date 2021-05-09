/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import MenuIcon from "@material-ui/icons/Menu";

export default function NavBarAppSideDrawer() {
  return (
    <Tooltip arrow placement="bottom" title={"TBD"} TransitionComponent={Zoom}>
      <IconButton color="inherit" onClick={() => {}}>
        <MenuIcon />
      </IconButton>
    </Tooltip>
  );
}
