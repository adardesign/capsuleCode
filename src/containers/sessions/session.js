import React, {  useEffect } from "react";
import ReactDataGrid from 'react-data-grid';
import { Toolbar, Data, Filters } from "react-data-grid-addons";



export default function Session({data, ...props}) {
    useEffect(() => {
      props.loadData();
      return () => {
        // 
      }
    }, []);

    if(!data) return null;
    
    window.rows = data
    const columns = Object.keys(data[0]).map( ele => {  
      console.log(ele)    
      return ele
    });
   
    // add nested collumns
    const rows = data.map( row => {
      console.log("row", row)
      const values = Object.values(row);
      //console.log(values)
      return values.map(vals => {
        if(typeof vals[1] === "object"){
          return Object.values(vals[1]).map(nestedVal=>{
            return nestedVal
          })
        }
        return {[vals[0]]: vals[1]}
      })
    }); 
    
    return (
      <div>
        {JSON.stringify(columns)}
        {JSON.stringify(rows)}
      </div>
    )

  return (
    <div className="App">
      <h1>Sessions</h1>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={3}
      />
    </div>
  );
}
