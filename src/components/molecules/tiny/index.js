import React, { useState, useEffect, useRef } from "react";
import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/table";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.min.css";
import { Editor } from "@tinymce/tinymce-react";
import Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
HC_exporting(Highcharts);

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const App = () => {
  const getSVG = async (data) => {
    //const container = document.createElement("div");
    // container.id = "container";
    const chart = Highcharts.chart("container", {
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
    await timeout(300);

    // console.log(Highcharts);
    console.log(chart.getSVG());
    return chart.getSVG();
  };
  useEffect(async () => {
      const content = await getSVGs()
      setContentEditor(content);
    return () => {
      // cleanup
    };
  }, []);
  const [contentEditor, setContentEditor] = useState("<h1>TEST</h1><img src='https://pdf-lib.js.org/img/logo-full.svg' width='150' />"
  );
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content, editor);
    // setContentEditor("");
  };



  return (
    <>
      <div id="container"></div>
      <Editor
        initialValue="TEST"
        init={{
          extended_valid_elements: "svg[*],defs[*],pattern[*],desc[*],metadata[*],g[*],mask[*],path[*],line[*],marker[*],rect[*],circle[*],ellipse[*],polygon[*],polyline[*],linearGradient[*],radialGradient[*],stop[*],image[*],view[*],text[*],textPath[*],title[*],tspan[*],glyph[*],symbol[*],switch[*],use[*]",
          skin: true,
          content_css: false,
          height: 500,
          menubar: false,
          plugins: [
            "link image",
            "table paste export pagebreak",
            "highcharts highchartssvg",
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste",
            "highcharts highchartssvg noneditable",
          ],
          toolbar:
            "pagebreak insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | export",
        }}
        value={contentEditor}
        onEditorChange={handleEditorChange}
      />
    </>
  );
};

export default App;
