import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import Layout from '../../components/template/layout';
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const Airlines = () => {
  const [page, setPage] = useState(0)
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    axios.get(`/api/airlines.${page}.json`).then(res => {
      setData(res.data.data)
    }).catch().finally(setIsLoading(false))
  }, [page])

  const onPageChange = (e) => {
    setPage(e.selected)
  }

  const onGridSort = (e) => {
    console.log(e)
  }

  const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
  };

  const columns = data && data.length && Object.keys(data[0]).map(e => ({
    key: e,
    name: e.replace("_", " "),
    sortable: true,
    width: 120
  }));
  const rows = data && data.length && data.map((e, i) => {
    return {
      ...e,
      id: i
    }
  });


  return (
    <Layout header={{ name: "Airlines" }} classNames={{ header: 'routeB', body: 'Vermont' }}>
      A list of airlines.
      {isLoading && <div className="loading">Loading...</div>}
      {data && (<DataGrid
        columns={columns}
        rows={rows}
        onGridSort={onGridSort}
      />)}

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={4}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />

    </Layout>
  )
}


const mapStateToProps = (state) => ({
  role: '',
});



export default connect(mapStateToProps)(Airlines)




