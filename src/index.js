/*!

=========================================================
* Argon Dashboard Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-chakra
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-chakra/blob/master/LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js"; // Chakra imports
import { ChakraProvider } from "@chakra-ui/react";
// Custom Chakra theme
import theme from "theme/theme.js";
import Profile from "views/Dashboard/Profile";
import ChatModule from "views/Dashboard/ChatModule";
import ContactsMain from "views/Dashboard/contactsmain";

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false} position="relative">
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/profile`} component={Profile} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/rtl`} component={RTLLayout} />
        <Route path={`/chatmodule`} component={ChatModule} />
        <Route path={`/contactsmain`} component={ContactsMain} />
        <Redirect from={`/`} to="/admin/profile" />
      </Switch>
    </HashRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
