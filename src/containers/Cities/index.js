import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/template/layout";
import { read } from "../../actions/crud";

const Cities = ({
  loadAirportsByPage,
  page,
  data,
  error,
  isLoading,
  load,
}) => {
  // first time
  useEffect(() => {
    loadAirportsByPage(page);
  }, []);

  const loadAirports = function ({ target }) {
    const dir = target.dataset.dir;
    let newPage;
    if (dir === "previous") {
      newPage = --page;
    } else {
      newPage = ++page;
    }
    loadAirportsByPage(newPage);
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
      <h1>A list of airports.</h1>
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="loading">Error: {error.message}</div>}
      {!error && data && <DataGrid columns={columns} rows={rows} />}
     
      {page > 0 && (
        <button onClick={loadAirports} data-dir="previous">
          load previous Airplanes page: {page - 1}
        </button>
      )}
      <button onClick={loadAirports} data-dir="next">
        Load next page: {page + 1}
      </button>

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
    loadAirportsByPage: (page) =>
      dispatch(read("AIRPORTS", "airplanes", { page })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Airports);
