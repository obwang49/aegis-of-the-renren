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
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, styled } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import GTranslateIcon from "@material-ui/icons/GTranslate";

import {
  AppLanguageOption,
  useAppLanguage,
  useValueByAppLanguage,
} from "../../utils/AppLanguageUtils";

import { ReactComponent as AppLanguageCNIcon } from "../../assets/language_cn.svg";
import { ReactComponent as AppLanguageENGIcon } from "../../assets/language_eng.svg";

const tooltipText = Object.freeze({
  cn: "更改语言",
  eng: "Change Language",
});

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
}));

function renderAppLanguageMenuItem(
  { icon, fontFamily, text, value }: item,
  setAppLanguage: (AppLanguageOptionType) => void,
  closeMenu: () => void
): React.Node {
  const handleClick = () => {
    setAppLanguage(value);
    closeMenu();
  };

  const OptionTextTypography = styled(Typography)({
    fontFamily: fontFamily,
  });

  return (
    <MenuItem key={value} onClick={handleClick}>
      <ListItemIcon>
        <SvgIcon>{icon}></SvgIcon>
      </ListItemIcon>
      <OptionTextTypography noWrap variant="h6">
        {text}
      </OptionTextTypography>
    </MenuItem>
  );
}

export default function NavBarAppLanguageMenu() {
  const classes = useStyles();

  const { setAppLanguage } = useAppLanguage();

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const openMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setMenuAnchorEl(null);
  };

  const tooltipTextByLanguage = useValueByAppLanguage(tooltipText);

  return (
    <>
      <Tooltip
        arrow
        placement="bottom"
        title={tooltipTextByLanguage}
        TransitionComponent={Zoom}
      >
        <IconButton color="inherit" onClick={openMenu}>
          <GTranslateIcon />
        </IconButton>
      </Tooltip>
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
