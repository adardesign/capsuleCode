import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/template/layout";
import DataGrid from "react-data-grid";
import { loadAirports } from "./actions";
import "react-data-grid/dist/react-data-grid.css";

const Airports = ({ loadAirports, page, data, error, isLoading, load }) => {
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
      header={{ name: "Airports" }}
      classNames={{ header: "routeB", body: "Vermont" }}
    >
      <button onClick={loadAirportsByPage}>Load Airports page: {page+1}</button>A list of
      airports.
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="loading">Error: {error.message}</div>}
      {!error && data && <DataGrid columns={columns} rows={rows} />}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  data: state.airports.data,
  page: state.airports.page,
  error: state.airports.error,
  isLoading: state.airports.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadAirports: (page) => dispatch(loadAirports(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Airports);
