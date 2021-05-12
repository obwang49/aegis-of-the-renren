/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./app/App.react";

/**
 * External Dependencies
 *
 * + Create React App
 *   - @usage: App creation & bootstrapping
 *   - @link: https://create-react-app.dev/
 * + Gh Pages
 *   - @usage: Github page publishing & deployment
 *   - @link: https://www.npmjs.com/package/gh-pages
 * + Material-UI
 *   - @usage: UI framework & design system
 *   - @link: https://material-ui.com/
 * + React
 *   - @usage: UI framework & library
 *   - @link: https://reactjs.org/
 * + React Cookie
 *   - @usage: browser cookie handling & interaction
 *   - @link: https://www.npmjs.com/package/react-cookie
 * + React HTML Parser
 *   - @usage: html text parsing & rendering
 *   - @link: https://www.npmjs.com/package/react-html-parser
 * + React Router
 *   - @usage: browser rounting & navigation
 *   - @link: https://reactrouter.com/
 * + Recoil
 *   - @usage: app state management & control
 *   - @link: https://recoiljs.org/
 */

export default function Root() {
  return (
    <CookiesProvider>
      <Router>
        <RecoilRoot>
          <CssBaseline />
          <App />
        </RecoilRoot>
      </Router>
    </CookiesProvider>
  );
}
