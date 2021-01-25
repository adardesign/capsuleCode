import Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import { resolve } from "tinymce/themes/silver/theme";
HC_exporting(Highcharts);

export default function getChartData(data = {}) {
  return new Promise(function (resolve, reject) {
    // Reference: http://techslides.com/save-svg-as-an-image

    var chartContainer = document.createElement("div");

    // Render a Highchart chart.
    var chart = new Highcharts.Chart({
      title: {
        text: data.skill || "my chart",
      },
      chart: {
        renderTo: chartContainer,
        width: 1000,
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
            29.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4,
          ],
        },
      ],
    });

    // Get an SVG tag.
    // http://api.highcharts.com/highcharts#Chart.getSVG)
    var svg = chart.getSVG();

    // Convert the SVG tag to a data uri.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
    var imgSrc = "data:image/svg+xml;base64," + btoa(svg);

    // Create a canvas DOM element used to store the svg temporarily.
    // http://www.w3schools.com/tags/ref_canvas.asp
    var canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 400;

    // Get a context to the canvas element, which can be used to draw on the canvas.
    var context = canvas.getContext("2d");

    // Create an image element to be drawn onto the canvas.
    var image = new Image();
    // Set the SVG as the source.
    image.src = imgSrc;

    // You may want to wrap this in a deferred promise in order to hold up execution.
    image.onload = function () {
      // Add the image to the canvas.
      // http://www.w3schools.com/tags/canvas_drawimage.asp
      context.drawImage(image, 0, 0);

      // Save the canvas as a dataurl.
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
      var pngSrc = canvas.toDataURL("image/png");

      //  Wrap the dataurl in html.
      var pngTag = '<img src="' + pngSrc + '">';

      resolve(pngTag);

      // Set png to container.
    };
  });
}
