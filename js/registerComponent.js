AFRAME.registerComponent("markerhandler", {
  init: function() {
    this.el.sceneEl.addEventListener("markerFound", e => {
      const locationName = e.target.getAttribute("location");

      if (document.getElementById("newPaintCanvas").style.display !== "block") {
        var openCanvasButton = document.getElementById("openCanvasButton");
        openCanvasButton.style.display = "block";
        openCanvasButton.addEventListener("click", e => {
          openCanvasButton.style.display = "none";
          document.getElementById("newPaintCanvas").style.display = "block";
          document.getElementById("closeCanvasButton").style.display = "block";
          document.getElementById("colorPanel").style.display = "block";
          document.getElementById("save").setAttribute("name", locationName);
        });
      }
    });
    this.el.sceneEl.addEventListener("markerLost", e => {
      var openCanvasButton = document.getElementById("openCanvasButton");
      openCanvasButton.style.display = "none";
    });
  }
});
