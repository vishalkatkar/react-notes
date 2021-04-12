import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./containers/login"));
const Notes = lazy(() => import("./containers/notes"));

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/notes" component={Notes} />
    </Switch>
  </Suspense>
);

export default Router;
