import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", api => {
  api.onToolbarCreate(toolbar => {
    toolbar.addButton({
      id: "excalidraw-button",
      icon: "paint-brush",
      label: "Insert Drawing",
      action: () => {
        openExcalidrawModal();
      },
    });
  });
});

function openExcalidrawModal() {
  const modalHtml = `
    <div id="excalidraw-container">
      {{render "composer/excalidraw"}}
    </div>
  `;

  bootbox.dialog({
    title: "Excalidraw",
    message: modalHtml,
    size: "large",
  });

  document.getElementById("insert-drawing").addEventListener("click", () => {
    const composer = require("discourse/models/composer").default;
    composer.appendText("[Excalidraw Drawing URL]");
    bootbox.hideAll();
  });
}
