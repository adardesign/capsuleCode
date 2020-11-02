import React from 'react'
import { Table, Column, AutoSizer, InfiniteLoader } from 'react-virtualized'
import faker from 'faker';
import Chart from 'react-apexcharts'
import './styles.css'
import 'react-virtualized/styles.css';


const series = {
   "monthDataSeries1": {
      "prices": [
         8107.85,
         8128,
         8122.9,
         8165.5,
         8340.7,
         8423.7,
         8423.5,
         8514.3,
         8481.85,
         8487.7,
         8506.9,
         8626.2,
         8668.95,
         8602.3,
         8607.55,
         8512.9,
         8496.25,
         8600.65,
         8881.1,
         9340.85
      ],
      "dates": [
         "13 Nov 2017",
         "14 Nov 2017",
         "15 Nov 2017",
         "16 Nov 2017",
         "17 Nov 2017",
         "20 Nov 2017",
         "21 Nov 2017",
         "22 Nov 2017",
         "23 Nov 2017",
         "24 Nov 2017",
         "27 Nov 2017",
         "28 Nov 2017",
         "29 Nov 2017",
         "30 Nov 2017",
         "01 Dec 2017",
         "04 Dec 2017",
         "05 Dec 2017",
         "06 Dec 2017",
         "07 Dec 2017",
         "08 Dec 2017"
      ]
   },
   "monthDataSeries2": {
      "prices": [
         8423.7,
         8423.5,
         8514.3,
         8481.85,
         8487.7,
         8506.9,
         8626.2,
         8668.95,
         8602.3,
         8607.55,
         8512.9,
         8496.25,
         8600.65,
         8881.1,
         9040.85,
         8340.7,
         8165.5,
         8122.9,
         8107.85,
         8128
      ],
      "dates": [
         "13 Nov 2017",
         "14 Nov 2017",
         "15 Nov 2017",
         "16 Nov 2017",
         "17 Nov 2017",
         "20 Nov 2017",
         "21 Nov 2017",
         "22 Nov 2017",
         "23 Nov 2017",
         "24 Nov 2017",
         "27 Nov 2017",
         "28 Nov 2017",
         "29 Nov 2017",
         "30 Nov 2017",
         "01 Dec 2017",
         "04 Dec 2017",
         "05 Dec 2017",
         "06 Dec 2017",
         "07 Dec 2017",
         "08 Dec 2017"
      ]
   },
   "monthDataSeries3": {
      "prices": [
         7114.25,
         7126.6,
         7116.95,
         7203.7,
         7233.75,
         7451,
         7381.15,
         7348.95,
         7347.75,
         7311.25,
         7266.4,
         7253.25,
         7215.45,
         7266.35,
         7315.25,
         7237.2,
         7191.4,
         7238.95,
         7222.6,
         7217.9,
         7359.3,
         7371.55,
         7371.15,
         7469.2,
         7429.25,
         7434.65,
         7451.1,
         7475.25,
         7566.25,
         7556.8,
         7525.55,
         7555.45,
         7560.9,
         7490.7,
         7527.6,
         7551.9,
         7514.85,
         7577.95,
         7592.3,
         7621.95,
         7707.95,
         7859.1,
         7815.7,
         7739,
         7778.7,
         7839.45,
         7756.45,
         7669.2,
         7580.45,
         7452.85,
         7617.25,
         7701.6,
         7606.8,
         7620.05,
         7513.85,
         7498.45,
         7575.45,
         7601.95,
         7589.1,
         7525.85,
         7569.5,
         7702.5,
         7812.7,
         7803.75,
         7816.3,
         7851.15,
         7912.2,
         7972.8,
         8145,
         8161.1,
         8121.05,
         8071.25,
         8088.2,
         8154.45,
         8148.3,
         8122.05,
         8132.65,
         8074.55,
         7952.8,
         7885.55,
         7733.9,
         7897.15,
         7973.15,
         7888.5,
         7842.8,
         7838.4,
         7909.85,
         7892.75,
         7897.75,
         7820.05,
         7904.4,
         7872.2,
         7847.5,
         7849.55,
         7789.6,
         7736.35,
         7819.4,
         7875.35,
         7871.8,
         8076.5,
         8114.8,
         8193.55,
         8217.1,
         8235.05,
         8215.3,
         8216.4,
         8301.55,
         8235.25,
         8229.75,
         8201.95,
         8164.95,
         8107.85,
         8128,
         8122.9,
         8165.5,
         8340.7,
         8423.7,
         8423.5,
         8514.3,
         8481.85,
         8487.7,
         8506.9,
         8626.2
      ],
      "dates": [
         "02 Jun 2017",
         "05 Jun 2017",
         "06 Jun 2017",
         "07 Jun 2017",
         "08 Jun 2017",
         "09 Jun 2017",
         "12 Jun 2017",
         "13 Jun 2017",
         "14 Jun 2017",
         "15 Jun 2017",
         "16 Jun 2017",
         "19 Jun 2017",
         "20 Jun 2017",
         "21 Jun 2017",
         "22 Jun 2017",
         "23 Jun 2017",
         "27 Jun 2017",
         "28 Jun 2017",
         "29 Jun 2017",
         "30 Jun 2017",
         "03 Jul 2017",
         "04 Jul 2017",
         "05 Jul 2017",
         "06 Jul 2017",
         "07 Jul 2017",
         "10 Jul 2017",
         "11 Jul 2017",
         "12 Jul 2017",
         "13 Jul 2017",
         "14 Jul 2017",
         "17 Jul 2017",
         "18 Jul 2017",
         "19 Jul 2017",
         "20 Jul 2017",
         "21 Jul 2017",
         "24 Jul 2017",
         "25 Jul 2017",
         "26 Jul 2017",
         "27 Jul 2017",
         "28 Jul 2017",
         "31 Jul 2017",
         "01 Aug 2017",
         "02 Aug 2017",
         "03 Aug 2017",
         "04 Aug 2017",
         "07 Aug 2017",
         "08 Aug 2017",
         "09 Aug 2017",
         "10 Aug 2017",
         "11 Aug 2017",
         "14 Aug 2017",
         "16 Aug 2017",
         "17 Aug 2017",
         "18 Aug 2017",
         "21 Aug 2017",
         "22 Aug 2017",
         "23 Aug 2017",
         "24 Aug 2017",
         "28 Aug 2017",
         "29 Aug 2017",
         "30 Aug 2017",
         "31 Aug 2017",
         "01 Sep 2017",
         "04 Sep 2017",
         "05 Sep 2017",
         "06 Sep 2017",
         "07 Sep 2017",
         "08 Sep 2017",
         "11 Sep 2017",
         "12 Sep 2017",
         "13 Sep 2017",
         "14 Sep 2017",
         "15 Sep 2017",
         "18 Sep 2017",
         "19 Sep 2017",
         "20 Sep 2017",
         "21 Sep 2017",
         "22 Sep 2017",
         "25 Sep 2017",
         "26 Sep 2017",
         "27 Sep 2017",
         "28 Sep 2017",
         "29 Sep 2017",
         "03 Oct 2017",
         "04 Oct 2017",
         "05 Oct 2017",
         "06 Oct 2017",
         "09 Oct 2017",
         "10 Oct 2017",
         "11 Oct 2017",
         "12 Oct 2017",
         "13 Oct 2017",
         "16 Oct 2017",
         "17 Oct 2017",
         "18 Oct 2017",
         "19 Oct 2017",
         "23 Oct 2017",
         "24 Oct 2017",
         "25 Oct 2017",
         "26 Oct 2017",
         "27 Oct 2017",
         "30 Oct 2017",
         "31 Oct 2017",
         "01 Nov 2017",
         "02 Nov 2017",
         "03 Nov 2017",
         "06 Nov 2017",
         "07 Nov 2017",
         "08 Nov 2017",
         "09 Nov 2017",
         "10 Nov 2017",
         "13 Nov 2017",
         "14 Nov 2017",
         "15 Nov 2017",
         "16 Nov 2017",
         "17 Nov 2017",
         "20 Nov 2017",
         "21 Nov 2017",
         "22 Nov 2017",
         "23 Nov 2017",
         "24 Nov 2017",
         "27 Nov 2017",
         "28 Nov 2017"
      ]
   }
}

const events = {
   mounted: function (chartContext, config) {
      console.log(chartContext, config)
   }
}


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
   };


   series = [{
      data: series.monthDataSeries1.prices
   }];

   options = {
      chart: {
         height: 350,
         type: 'line',
         id: 'areachart-2',
         events: {
            mounted: function (chartContext, config) {
               console.log(chartContext, config)
            },
            click: (event, chartContext, config) => {
               console.log(event, chartContext, config);
            },
            legendClick: (chartContext, seriesIndex, config) => {
               console.log(chartContext, seriesIndex, config)
            },
            markerClick: function (event, chartContext, { seriesIndex, dataPointIndex, config }) {
               console.log(event, chartContext, seriesIndex, dataPointIndex, config)
            }
         }
      },
      annotations: {
         yaxis: [{
            y: 8200,
            borderColor: '#00E396',
            label: {
               borderColor: '#00E396',
               style: {
                  color: '#fff',
                  background: '#00E396',
               },
               text: 'Support',
            }
         }, {
            y: 8600,
            y2: 9000,
            borderColor: '#000',
            fillColor: '#FEB019',
            opacity: 0.2,
            label: {
               borderColor: '#333',
               style: {
                  fontSize: '10px',
                  color: '#333',
                  background: '#FEB019',
               },
               text: 'Y-axis range',
            }
         }],
         xaxis: [{
            x: new Date('23 Nov 2017').getTime(),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
               borderColor: '#775DD0',
               style: {
                  color: '#fff',
                  background: '#775DD0',
               },
               text: 'Anno Test',
            }
         }, {
            x: new Date('26 Nov 2017').getTime(),
            x2: new Date('28 Nov 2017').getTime(),
            fillColor: '#B3F7CA',
            opacity: 0.4,
            label: {
               borderColor: '#B3F7CA',
               style: {
                  fontSize: '10px',
                  color: '#fff',
                  background: '#00E396',
               },
               offsetY: -10,
               text: 'X-axis range',
            }
         }],
         points: [{
            x: new Date('01 Dec 2017').getTime(),
            y: 8607.55,
            marker: {
               size: 8,
               fillColor: '#fff',
               strokeColor: 'red',
               radius: 2,
               cssClass: 'apexcharts-custom-class'
            },
            label: {
               borderColor: '#FF4560',
               offsetY: 0,
               style: {
                  color: '#fff',
                  background: '#FF4560',
               },

               text: 'Point Annotation',
            }
         }, {
            x: new Date('08 Dec 2017').getTime(),
            y: 9340.85,
            marker: {
               size: 0
            }
         }]
      },
      dataLabels: {
         enabled: false
      },
      stroke: {
         curve: 'straight'
      },
      grid: {
         padding: {
            right: 30,
            left: 20
         }
      },
      title: {
         text: 'Line with Annotations',
         align: 'left'
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
         type: 'datetime',
      },
   }




   render() {
      return (
         <div className="container">
            <Chart options={this.options} series={this.series} events={events} type="line" width={500} height={320} />

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