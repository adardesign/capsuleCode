import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/template/layout";
import DataGrid from "react-data-grid";
import { read } from "../../actions/crud";
import "react-data-grid/dist/react-data-grid.css";

const Airplanes = ({ loadAirports, page, data, error, isLoading, load }) => {
  
  // first time
  useEffect(() => {
    loadAirports(0)
  }, [])

  const loadAirplanesByPage = function ({target}) {
    const dir = target.dataset.dir;
    let newPage;
    if(dir === "previous") {
      newPage = --page 
    }else{
      newPage = ++page 
    }
    loadAirports(newPage);
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
      { page > 0 &&  <button onClick={loadAirplanesByPage} data-dir="previous">
        load previous Airplanes page: {page - 1}
      </button>
      }
      <button onClick={loadAirplanesByPage} data-dir="next">
        Load next page: {page + 1}
      </button>
      A list of airports.
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
    loadAirplanesByPage: (page) => dispatch(read("AIRPLANES", "airplanes", { page })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Airplanes);
