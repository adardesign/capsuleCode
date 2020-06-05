import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/template/layout";
import DataGrid from "react-data-grid";
import { loadAirplanes } from "./actions";
import "react-data-grid/dist/react-data-grid.css";

const Airplanes = ({ loadAirports, page, data, error, isLoading, load }) => {
  const loadAirportsByPage = function () {
    loadAirports(page);
  };
  const columns =
    data &&
    data.length &&
    Object.keys(data[0]).map((e) => ({
      key: e,
      name: e.replace("_", " "),
      sortable: true,
      width: 120,
    }));
  const rows =
    data &&
    data.length &&
    data.map((e, i) => {
      return {
        ...e,
        id: i,
      };
    });
  return (
    <Layout
      header={{ name: "Airplanes" }}
      classNames={{ header: "routeB", body: "Vermont" }}
    >
      <button onClick={loadAirportsByPage}>Load Airplanes page: {page+1}</button>A list of
      airports.
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="loading">Error: {error.message}</div>}
      {!error && data && <DataGrid columns={columns} rows={rows} />}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  data: state.airplanes.data,
  page: state.airplanes.page,
  error: state.airplanes.error,
  isLoading: state.airplanes.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadAirports: (page) => dispatch(loadAirplanes(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Airplanes);
