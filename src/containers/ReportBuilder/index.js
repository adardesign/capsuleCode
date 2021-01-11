import React from "react";
import { Link, Router } from "@reach/router";
import Tiny from "../../components/molecules/tiny/";


export default function index() {
  return (
    <div>
      <Link to="tiny">Tiny</Link>
      <Router>
        <Tiny path="tiny" />
      </Router>
    </div>
  );
}
