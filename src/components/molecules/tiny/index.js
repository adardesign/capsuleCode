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
import "../../../utils/plugins/reportBuilder";
import { Editor } from "@tinymce/tinymce-react";
import Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
HC_exporting(Highcharts);


const getValues = () => {
  const random = ()=> Math.random()*100
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
  }
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const App = () => {
  const getSVG = async (data) => {
    const chart = Highcharts.chart("container", getValues());
    await timeout(1300);

    // console.log(Highcharts);
    console.log(chart.getSVG());
    return "<div style='border:1px solid #ccc;'>"+chart.getSVG()+"</div>";
  };
  useEffect(async () => {

    let content = "<img src='https://via.placeholder.com/950x165&text=NPS%20letterhead'/>"  
      content += `<br/><br/><br/><strong>Client Name</strong>: Johnny Doe<br>
      <strong>DOB</strong>: 2/5/2021<br>
      <strong>Insurance</strong> ID#<br>
      <strong>Date of Report:</strong> 6/29/2021<br>`
      
      content += "<p> </p><p> </p>"
      content += `<h2>Crisis Plan:</h2>In case of inclement weather, therapists will not be expected to provide services. If a medical emergency arises, therapists are advised to call 911 and parents will be
      notified. Emergency contact information will be kept in the child’s files to be used if the parents are not present. In event of severe change in behavior; the therapist
      should remove the child to a safe environment, notify the parents, and the BCBA. The office at Master Faster should be called: 845-477-5000. The incident should be
      recorded on a descriptive data sheet including the antecedent, behavior and consequence`
      content += "<p> </p><p> </p>"
      content += "<h2>Skill Area: Social</h2>"
      content +=  await getSVG();
      content += "<p> </p><p> </p>"

      content += "<h2>Skill Area: Behavior Management</h2>";
      content += await getSVG();
      setContentEditor(content);
    return () => {
      // cleanup
    };
  }, []);
  const [contentEditor, setContentEditor] = useState("<h1>rendering..</h1>"
  );
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content, editor);
    // setContentEditor("");
  };



  return (
    <>
      <div style={{display:"none"}} id="container"></div>
      <Editor
        initialValue="TEST"
        init={{
          extended_valid_elements: "svg[*],defs[*],pattern[*],desc[*],metadata[*],g[*],mask[*],path[*],line[*],marker[*],rect[*],circle[*],ellipse[*],polygon[*],polyline[*],linearGradient[*],radialGradient[*],stop[*],image[*],view[*],text[*],textPath[*],title[*],tspan[*],glyph[*],symbol[*],switch[*],use[*]",
          skin: true,
          content_css: false,
          height: 500,
          menubar: false,
          plugins: [
            "link image example",
            "table paste export pagebreak",
            "highcharts highchartssvg",
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste",
            "highcharts highchartssvg noneditable",
          ],
          toolbar:
            "example pagebreak insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | export",
        }}
        value={contentEditor}
        onEditorChange={handleEditorChange}
      />
    </>
  );
};

export default App;
