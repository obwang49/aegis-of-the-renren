/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import MenuIcon from "@material-ui/icons/Menu";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { AppPathOption, useAppPath } from "../../utils/AppPathUtils";
import BoxNoUserDragOrSelect from "../common/BoxNoUserDragOrSelect.react";
import NavBarAppSideDrawerLogOutItem from "./NavBarAppSideDrawerLogOutItem.react";
import NavBarAppSideDrawerPageList from "./NavBarAppSideDrawerPageList.react";
import NavBarAppSideDrawerSignInItem from "./NavBarAppSideDrawerSignInItem.react";

const tooltipText = Object.freeze({
  cn: "打开菜单栏",
  eng: "Open Menu",
});

const useStyles = makeStyles((theme) => ({
  drawer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
  },
}));

export default function NavBarAppSideDrawer() {
  const classes = useStyles();

  const { appPath } = useAppPath();
  const isHomePage = appPath === AppPathOption.home;

  const tooltipTextByLanguage = useValueByAppLanguage(tooltipText);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Tooltip
        arrow
        placement="bottom"
        title={tooltipTextByLanguage}
        TransitionComponent={Zoom}
      >
        <IconButton color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="right"
        className={classes.drawer}
        onClose={toggleDrawer}
        open={isDrawerOpen}
      >
        <BoxNoUserDragOrSelect>
          {isHomePage ? (
            <NavBarAppSideDrawerSignInItem />
          ) : (
            <NavBarAppSideDrawerLogOutItem />
          )}
          <Divider />
          <NavBarAppSideDrawerPageList />
        </BoxNoUserDragOrSelect>
      </Drawer>
    </>
  );
}
