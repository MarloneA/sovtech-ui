import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./../pages/Loader";

const LandingPage = lazy(() =>
  import(/* webpackChunkName: "LandingPage" */ "./../pages/LandingPage")
);
const CharacterPage = lazy(() =>
  import(/* webpackChunkName: "CharacterPage" */ "./../pages/CharacterPage")
);

const AppRoutes = () => (
  <Switch>
    <Route
      path="/"
      render={(props) => (
        <Suspense fallback={<Loading />}>
          <LandingPage {...props} />
        </Suspense>
      )}
      exact
    />
    <Route
      path="/characters/:name"
      render={(props) => (
        <Suspense fallback={<Loading />}>
          <CharacterPage {...props} />
        </Suspense>
      )}
      exact
    />
  </Switch>
);

export default AppRoutes;
