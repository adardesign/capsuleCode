import React from "react";
import { connect } from 'react-redux'
import Layout from '../../components/template/layout';
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';

const Airports = ({ data, isLoading, load }) => {

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' }
  ];

  const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
  ];



  return (
    <Layout header={{ name: "Airports" }} classNames={{ header: 'routeB', body: 'Vermont' }}>
      A list of airports.
      {isLoading && <div className="loading">Loading...</div>}
      {data && (<DataGrid
        columns={columns}
        rows={rows}
      />)}
    </Layout>
  )
}


const mapStateToProps = (state) => ({
  data: state.airports.data,
  isLoading: state.airports.isLoading
});



export default connect(mapStateToProps)(Airports)




