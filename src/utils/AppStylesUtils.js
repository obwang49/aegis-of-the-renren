/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import { cyan, deepOrange } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { useValueByAppLanguage } from "./AppLanguageUtils";
import { useAppThemeMode } from "./AppThemeModeUtils";

export const APP_THEME_PALETTE_PRIMARY_MAIN = cyan[900];
export const appThemeBase = Object.freeze({
  palette: {
    primary: { main: APP_THEME_PALETTE_PRIMARY_MAIN },
    secondary: deepOrange,
    type: "",
  },
  typography: {
    fontFamily: "",
  },
});

export const appThemeTypographyFontFamily = Object.freeze({
  cn: "ZCOOL KuaiLe",
  eng: "Carter One",
});

export function useAppTheme(): { appTheme: mixed } {
  const appFontFamilyByLanguage = useValueByAppLanguage(
    appThemeTypographyFontFamily
  );
  const { appThemeMode } = useAppThemeMode();
  const appTheme = responsiveFontSizes(
    createMuiTheme({
      ...appThemeBase,
      palette: {
        ...appThemeBase.palette,
        type: appThemeMode,
      },
      typography: {
        ...appThemeBase.typography,
        fontFamily: appFontFamilyByLanguage,
      },
    })
  );

  return { appTheme };
}

export function combineClasses(classes: Array<string>): string {
  return classes.join(" ");
}
