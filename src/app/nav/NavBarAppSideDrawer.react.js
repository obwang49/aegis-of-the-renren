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
import List from "@material-ui/core/List";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import MenuIcon from "@material-ui/icons/Menu";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";
import { AppPathOption, useAppPath } from "../../utils/AppPathUtils";
import BoxNoUserDragOrSelect from "../common/BoxNoUserDragOrSelect.react";
import HomePageSignInDialog from "../home/HomePageSignInDialog.react";
import NavBarAppSideDrawerEmailLinkItem from "./NavBarAppSideDrawerEmailLinkItem.react";
import NavBarAppSideDrawerGithubLinkItem from "./NavBarAppSideDrawerGithubLinkItem.react";
import NavBarAppSideDrawerPageList from "./NavBarAppSideDrawerPageList.react";
import NavBarAppSideDrawerSignInItem from "./NavBarAppSideDrawerSignInItem.react";
import NavBarAppSideDrawerSignOutItem from "./NavBarAppSideDrawerSignOutItem.react";

const tooltipText = Object.freeze({
  cn: "打开菜单栏",
  eng: "Open Menu",
});

const useStyles = makeStyles((theme) => ({
  drawer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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

  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);
  const toggleSignInDialog = () => {
    setIsSignInDialogOpen(!isSignInDialogOpen);
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
            <NavBarAppSideDrawerSignInItem
              onClick={toggleSignInDialog}
              onClose={toggleDrawer}
            />
          ) : (
            <NavBarAppSideDrawerSignOutItem onClose={toggleDrawer} />
          )}
          <Divider />
          <NavBarAppSideDrawerPageList onClose={toggleDrawer} />
          <Divider />
          <List>
            <NavBarAppSideDrawerGithubLinkItem onClose={toggleDrawer} />
            <NavBarAppSideDrawerEmailLinkItem onClose={toggleDrawer} />
          </List>
        </BoxNoUserDragOrSelect>
      </Drawer>
      <HomePageSignInDialog
        isOpen={isSignInDialogOpen}
        onClose={toggleSignInDialog}
      />
    </>
  );
}
