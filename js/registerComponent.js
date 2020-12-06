AFRAME.registerComponent("markerhandler", {
  init: function() {
    this.el.sceneEl.addEventListener("markerFound", e => {
      // const locationName = e.target.getAttribute("location");
      const locationName = e.target.id.replace("nft_", "");

      if (document.getElementById("newPaintCanvas").style.display !== "block") {
        // Display painting switching buttons
        var prevImgButton = document.getElementById("prevImgButton");
        var nextImgButton = document.getElementById("nextImgButton");
        prevImgButton.style.display = "block";
        nextImgButton.style.display = "block";
        prevImgButton.setAttribute("name", locationName);
        nextImgButton.setAttribute("name", locationName);

        var openCanvasButton = document.getElementById("openCanvasButton");
        openCanvasButton.style.display = "block";
        openCanvasButton.addEventListener("click", e => {
          openCanvasButton.style.display = "none";
          document.getElementById("newPaintCanvas").style.display = "block";
          document.getElementById("closeCanvasButton").style.display = "block";
          document.getElementById("colorPanel").style.display = "block";
          document.getElementById("brushPanel").style.display = "block";
          document.getElementById("actionPanel").style.display = "block";
          document.getElementById("save").setAttribute("name", locationName);
        });
      }
    });
    this.el.sceneEl.addEventListener("markerLost", e => {
      document.getElementById("openCanvasButton").style.display = "none";
      document.getElementById("prevImgButton").style.display = "none";
      document.getElementById("nextImgButton").style.display = "none";
    });
  }
});
