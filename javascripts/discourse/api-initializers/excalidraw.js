import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "excalidraw-integration",

  initialize() {
    withPluginApi("0.8.42", (api) => {
      api.addComposerFields({
        name: "excalidraw",
        component: "excalidraw-button",
        label: "Excalidraw",
      });

      api.modifyClass("component:composer", {
        pluginId: "excalidraw",

        actions: {
          openExcalidraw() {
            const excalidrawUrl = settings.excalidraw_url || "https://excalidraw.com";
            window.open(excalidrawUrl, "_blank", "width=800,height=600");
          },
        },
      });
    });
  },
};
