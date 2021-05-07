/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { AppLanguageOptionType } from "../../utils/AppLanguageUtils";

import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GTranslateIcon from "@material-ui/icons/GTranslate";

import {
  AppLanguageOption,
  useAppLanguage,
} from "../../utils/AppLanguageUtils";

import { ReactComponent as AppLanguageCNIcon } from "../../assets/language_cn.svg";
import { ReactComponent as AppLanguageENGIcon } from "../../assets/language_eng.svg";

const appLanguageMenuItems = Object.freeze({
  cn: {
    fontFamily: "ZCOOL KuaiLe",
    icon: <AppLanguageCNIcon />,
    text: "简体中文",
    value: AppLanguageOption.cn,
  },
  eng: {
    fontFamily: "Carter One",
    icon: <AppLanguageENGIcon />,
    text: "English",
    value: AppLanguageOption.eng,
  },
});

const useStyles = makeStyles((theme) => ({
  menu: {
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function renderAppLanugageOptionText({ fontFamily, text }: item): React.Node {
  return (
    <ThemeProvider
      theme={createMuiTheme({
        typography: {
          fontFamily: fontFamily,
        },
      })}
    >
      <Typography noWrap variant="h6">
        {text}
      </Typography>
    </ThemeProvider>
  );
}

function renderAppLanguageMenuItem(
  item,
  setAppLanguage: (AppLanguageOptionType) => void,
  closeMenu: () => void
): React.Node {
  const { icon, value } = item;

  const handleClick = () => {
    setAppLanguage(value);
    closeMenu();
  };

  return (
    <MenuItem key={value} onClick={handleClick}>
      <ListItemIcon>
        <SvgIcon>{icon}></SvgIcon>
      </ListItemIcon>
      {renderAppLanugageOptionText(item)}
    </MenuItem>
  );
}

export default function NavBarAppLanguageMenu() {
  const classes = useStyles();

  const { appLanguage, setAppLanguage } = useAppLanguage();

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const openMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <Button
        className={classes.button}
        color="inherit"
        endIcon={<ExpandMoreIcon />}
        onClick={openMenu}
        size="large"
        startIcon={<GTranslateIcon />}
      >
        {renderAppLanugageOptionText(appLanguageMenuItems[appLanguage])}
      </Button>
      <Menu
        anchorEl={menuAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        className={classes.menu}
        getContentAnchorEl={null}
        keepMounted
        onClose={closeMenu}
        open={Boolean(menuAnchorEl)}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {Object.values(appLanguageMenuItems).map((item) =>
          renderAppLanguageMenuItem(item, setAppLanguage, closeMenu)
        )}
      </Menu>
    </>
  );
}
