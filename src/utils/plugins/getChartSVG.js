import Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
HC_exporting(Highcharts);

export default async function getChartSVG() {
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const getValues = () => {
    const random = () => Math.random() * 100;
    return {
      credits: {
        enabled: true,
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      series: [
        {
          data: [
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
          ],
        },
      ],
    };
  };
  const chart = Highcharts.chart("container", getValues());
  await timeout(1300);

  // console.log(Highcharts);
  // console.log(chart.getSVG());
  return "<div style='border:1px solid #ccc;'>" + chart.getSVG() + "</div>";
}
