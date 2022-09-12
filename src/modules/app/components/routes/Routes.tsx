import React from "react";
import { /* RouteComponentProps */ Redirect, Switch } from "react-router";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { Paths } from "./types";
import { NotFound } from "./NotFound";
import { StyledRoutes, StyledRoutesContainer } from "./style";
import Homepage from "../../../homepage";
import Footer from "../footer";
import Navbar from "../navbar";
import { useDispatch } from "react-redux";
import { Login } from "../../../../logic/actions";
import { useEagerConnect } from "../../../../wallet_helpers/walletListner";

const notFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.root,
    component: Homepage,
    protected: false,
    redirect: Paths.home,
    title: "ETP",
    pathType: 1,
  },
  {
    path: Paths.home,
    component: Homepage,
    protected: false,
    redirect: Paths.home,
    title: "ETP",
    pathType: 2,
  },
].concat(notFoundRoute as any); // Ensure that notFound is the last route

export interface RouteDefinition {
  path: string;
  protected?: boolean;
  redirect?: string;
  component?: any;
  routes?: RouteDefinition[];
  title?: string;
  pathType?: number;
}

interface Props {
  // userLoaded: boolean
}
interface RoutesProps {}

function getRouteRenderWithAuth(route: RouteDefinition, i: number) {
  return () => <route.component />;
}

const Routes: React.FC<Props & RoutesProps> = () => {
  const dispatch = useDispatch();
  useEagerConnect()
  return (
   
      <Router history={history}>
        <Navbar />
        <StyledRoutesContainer>
        <StyledRoutes>
          <Switch>
            <Redirect exact from="/" to={Paths.home} />
            {routes.map((route, i) => {
              const render = getRouteRenderWithAuth(route, i);
              const rest = { render };
              return <Route key={i} path={route.path} exact {...rest} />;
            })}
          </Switch>
        </StyledRoutes>
    </StyledRoutesContainer>

        {/* <Footer /> */}
      </Router>
  );
};

export default Routes;
