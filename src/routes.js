import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";
import { connect } from "react-redux";
import Login from "./containers/Login/";
import Nav from "./components/molecules/nav";
import LazyLoadingPage from "./components/atoms/lazyLoadingPage";

const RouteA = lazy(() => import("./containers/RouteA"));
const RouteB = lazy(() => import("./containers/RouteB"));
const Airlines = lazy(() => import("./containers/Airlines"));
const Airports = lazy(() => import("./containers/Airports"));
const Airplanes = lazy(() => import("./containers/Airplanes"));
const Cities = lazy(() => import("./containers/Cities"));
const FlightRoutes = lazy(() => import("./containers/Routes"));



const Routes = ({ isLoggedIn }) => {
  if (!isLoggedIn) return <Login />;
  return (
    <div className="row">
      <Nav
        className="column1"
        navItems={[
          { route: "airlines", name: "Airlines" },
          { route: "airports", name: "Airports" },
          { route: "airplanes", name: "Airplanes" },
          { route: "cities", name: "Cities" },
          { route: "routes", name: "Routes" },
          { route: "routeA", name: "routeA" },
          { route: "routeB", name: "routeB" },
        ]}
      />
      <div className="column2">
        <Suspense fallback={<LazyLoadingPage />}>
          <Router>
            <RouteA path="/routeA" />
            <RouteB path="/routeB" />
            <Airlines path="/airlines" />
            <Airports path="/airports" />
            <Airplanes path="/airplanes" />
            <Cities path="/cities" />
            <FlightRoutes path="/routes" />
          </Router>
        </Suspense>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
});

export default connect(mapStateToProps)(Routes);
