import React from 'react'
import { Table, Column, AutoSizer, InfiniteLoader } from 'react-virtualized'
import faker from 'faker';
import './styles.css'
import 'react-virtualized/styles.css';

const generateRandomItem = (idx) => ({
   id: idx,
   city: faker.address.city(),
   state: faker.address.state(),
   country: faker.address.country(),
   population: faker.random.number(),

})

class Cities extends React.Component {
   constructor() {
      super()
      this.loadMore = this.loadMore.bind(this)
      // fake data
      let items = []
      for (let i = 0, l = 100; i < l; i++) {
         items.push(generateRandomItem(i))
      }
      this.state = {
         items: items
      }
   }

   loadMore() {
      // simulate a request
      setTimeout(() => { this.actuallyLoadMore() }, 500)
      // we need to return a promise
      return new Promise((resolve, reject) => {
         this.promiseResolve = resolve;
      })
   }

   actuallyLoadMore() {
      // fake new data
      let newItems = []
      let s = this.state.items.length + 1
      for (let i = 0, l = 100; i < l; i++) {
         newItems.push(generateRandomItem(s + i))
      }
      this.setState({ items: this.state.items.concat(newItems) })
      // resolve the promise after data where fetched
      this.promiseResolve();

      // rowCount = Number of rows in list; can be arbitrary high number if actual number is unknown.
   }

   render() {
      return (
         <div className="container">
            <InfiniteLoader
               isRowLoaded={({ index }) => !!this.state.items[index]}
               loadMoreRows={this.loadMore}
               rowCount={1000000}
            >
               {({ onRowsRendered, registerChild }) => (
                  <AutoSizer>
                     {({ width }) => (
                        <Table
                           ref={registerChild}
                           onRowsRendered={onRowsRendered}
                           rowClassName='table-row'
                           headerHeight={40}
                           width={width}
                           height={1300}
                           rowHeight={40}
                           rowCount={this.state.items.length}
                           rowGetter={({ index }) => this.state.items[index]}
                        >
                           <Column
                              label='Id'
                              dataKey='id'
                              width={width * 0.2}
                           />
                           <Column
                              label='city'
                              dataKey='city'
                              width={width * 0.4}
                           />
                           <Column
                              label='state'
                              dataKey='state'
                              width={width * 0.4}
                           />
                           <Column
                              label='country'
                              dataKey='country'
                              width={width * 0.4}
                           />
                             <Column
                              label='population'
                              dataKey='population'
                              width={width * 0.4}
                           />
                        </Table>
                     )}
                  </AutoSizer>
               )}
            </InfiniteLoader>
         </div>
      )
   }
}
export default Cities;