/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./app/App.react";

/**
 * External Dependencies
 *
 * + Material-UI
 *   - @usage: UI framework & design system
 *   - @link: https://material-ui.com/
 * + React Router
 *   - @usage: browser rounting & navigation
 *   - @link: https://reactrouter.com/
 * + Recoil
 *   - @usage: app state management & control
 *   - @link: https://recoiljs.org/
 */

export default function Root() {
  return (
    <>
      <CssBaseline />
      <Router>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Router>
    </>
  );
}
