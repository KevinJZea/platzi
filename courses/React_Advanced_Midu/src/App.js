import React, { Suspense, useContext } from "react";
import { Router, Redirect } from "@reach/router";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

const Favs = React.lazy(() => import("./pages/Favs"));

import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NotFound } from "./pages/NotFound";

import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { Context } from "./Context";
import { GlobalStyle } from "./styles/globalStyles";

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />

      <Router>
        <NotFound default />

        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />

        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}

        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <Navbar />
    </Suspense>
  );
};
