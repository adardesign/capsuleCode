import tinymce from "tinymce/tinymce";
import Litepicker from "litepicker";
import getChartImage from "./getChartImage";

tinymce.PluginManager.add("addWidget", function (editor, url) {
  var openDialog = function () {
    return editor.windowManager.open({
      title: "📈 Add a widget",
      body: {
        type: "tabpanel",
        tabs: [
          {
            name: "widget",
            title: "📈 skill",
            items: [
              {
                type: "listbox", // component type
                name: "ListBoxA", // identifier
                label: "skill",
                disabled: false, // disabled state
                items: [
                  { text: "- choose skill-", value: "" },
                  { text: "social", value: "social" },
                  { text: "Behavior Management", value: "Behavior" },
                  { text: "Community", value: "Community" },
                ],
              },
              {
                type: "htmlpanel", // component type
                html: `<div class="tox-form__group">
                <label class="tox-label" for="editor-widget-datepicker">Pick a date range:</label>
                    <input type="text" class="editor-widget-datepicker" id="editor-widget-datepicker"/>
                </div>`,
              },
              {
                type: "checkbox",
                name: "includeSummary",
                label: "Include a Summary",
              },
              {
                type: "checkbox",
                name: "includeBaseline",
                label: "show Baseline",
              },
            ],
          },
          {
            name: "saved text",
            title: "✏️ signature",
            items: [
              {
                type: "listbox", // component type
                name: "ListBoxA", // identifier
                label: "Saved text",
                disabled: false, // disabled state
                items: [
                  { text: "Crisis plan", value: "1" },
                  { text: "therapist, date", value: "2" },
                ],
              },
            ],
          },
          {
            name: "signature",
            title: "✍️ signature",
            items: [
              {
                type: "listbox", // component type
                name: "ListBoxA", // identifier
                label: "signature type",
                disabled: false, // disabled state
                items: [
                  { text: "BCBA & therapist, date", value: "1" },
                  { text: "therapist, date", value: "2" },
                ],
              },
            ],
          },
          {
            name: "mytab",
            title: "📖 Help",

            items: [
              {
                type: "htmlpanel", // component type
                html: `<div>
                    <h3>Custom NPS picker</h3>
                    <ul>
                        <li>saved text</li>
                        <li>skill summary</li>
                    </ul>
                </div>`,
              },
            ],
          },
        ],
      },
      buttons: [
        {
          type: "cancel",
          text: "Close",
        },
        {
          type: "submit",
          text: "Save",
          primary: true,
        },
      ],
      onTabChange: function (dialogApi, details) {
        // log the contents of details

        var datepickerEle = document.getElementById("editor-widget-datepicker");
        if (datepickerEle) {
          var picker = new Litepicker({
            element: datepickerEle,
            autoApply: true,
            singleMode: false,
            numberOfMonths: 2,
            numberOfColumns: 2,
            splitView: true,
            // on change update input
          });
        }

        // switch back to the old tab
        // dialogApi.showTab(details.oldTabName);
      },
      onSubmit: async function (api) {
        var data = api.getData();
        const text = await Promise.resolve("async value");
        console.log(editor);

        if ("s") {
          var image = await getChartImage({
            skill: "skill",
            dateRange: "12333-3333",
            showSummary: true,
            showBaseline: true,
          });

          editor.insertContent(image);
        }

        setTimeout(function () {
          editor.insertContent("dynamic value BH");
          api.close();
        }, 3000);
        console.log(data);
        // Insert content when the window form is submitted
      },
    });
  };

  // Add a button that opens a window
  editor.ui.registry.addButton("addWidget", {
    text: "📈 Add widget",
    onAction: function () {
      // Open window
      openDialog();
    },
  });

  // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
  editor.ui.registry.addMenuItem("addWidget", {
    text: "📈 Add widget",
    onAction: function () {
      // Open window
      openDialog();
    },
  });

  return {
    getMetadata: function () {
      return {
        name: "Example plugin",
        url: "http://exampleplugindocsurl.com",
      };
    },
  };
});
