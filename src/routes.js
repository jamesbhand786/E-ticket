// import
import React, { Component }  from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import SignIn from 'views/Dashboard/SignIn';
import SignUp from 'views/Dashboard/SignUp';
import ForgotPassword from 'views/Dashboard/ForgotPassword';
import VerifyEmail from 'views/Dashboard/VerifyEmail';
import Contacts from 'views/Dashboard/Contacts';
import Chatts from 'views/Dashboard/Chatts';

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/contacts",
    name: "contacts",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Contacts,
    layout: "/admin",
  },
  {
    path: "/chatts",
    name: "chatts",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: Chatts,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color='inherit' />,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color='inherit' />,
        component: SignUp,
        layout: "/auth",
      },
      {
        path: "/forgotpassword",
        name: "Forgot Password",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color='inherit' />,
        component: ForgotPassword,
        layout: "/auth",
      },
      {
        path: "/verifyemail",
        name: "Verify Email",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color='inherit' />,
        component: VerifyEmail,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
