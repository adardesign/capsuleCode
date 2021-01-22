import tinymce from "tinymce/tinymce";

  tinymce.PluginManager.add("example", function (editor, url) {
    var openDialog = function () {
      return editor.windowManager.open({
        title: "Add a widget",
        body: {
          type: "panel",
          items: [
            {
              type: "input",
              name: "title",
              label: "Title",
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
        onSubmit: function (api) {
          var data = api.getData();
          // Insert content when the window form is submitted
          editor.insertContent("Title: " + data.title);
          api.close();
        },
      });
    };

    // Add a button that opens a window
    editor.ui.registry.addButton("example", {
      text: "Add report",
      onAction: function () {
        // Open window
        openDialog();
      },
    });

    // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
    editor.ui.registry.addMenuItem("example", {
      text: "Example plugin",
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
