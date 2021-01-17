AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.el.sceneEl.addEventListener("markerFound", (e) => {
      // const locationName = e.target.getAttribute("location");
      try {
        const locationName = e.target.id.replace("nft_", ""); // Display painting switching buttons
        $("#state").attr("data-locationName", locationName);
        var prevImgButton = $("#prevImgButton");
        var nextImgButton = $("#nextImgButton");
        prevImgButton.css("display", "block");
        nextImgButton.css("display", "block");
        prevImgButton.attr("name", locationName);
        nextImgButton.attr("name", locationName);

        var openCanvasButton = $("#openCanvasButton");
        if (openCanvasButton) {
          openCanvasButton.css("display", "block");
          openCanvasButton.addEventListener("click", (e) => {
            $("#newPaintCanvas").css("display", "block");
            $("#closeCanvasButton").css("display", "block");
            $("#toolPanel").css("display", "block");
            $("#save").attr("name", locationName);
          });
        }

        var aImage = $("#nft_" + locationName + " a-image[name='currentImg']");
        if (aImage) {
          const key = aImage.attr("src").replace("#", "");
          // display first painting info
          $("#imgInfo_" + key).css("display", "block");

          var likeButton = $("#likeButton");
          if (likeButton) {
            likeButton.css("display", "block");
            likeButton.attr("name", locationName);
            likeButton.addEventListener("click", (e) => {
              var uid = $("#state").data("uid");
              if (uid && uid !== "") {
                const imgId = $(
                  "#nft_" + locationName + " a-image[name='currentImg']"
                )
                  .attr("src")
                  .substring(1);
                alert(imgId);
                like(imgId, locationName, uid);
              }
            });
          }
        }
      } catch (e) {
        alert(e);
      }
    });

    this.el.sceneEl.addEventListener("markerLost", (e) => {
      var openCanvasButton = document.getElementById("openCanvasButton");
      if (openCanvasButton) openCanvasButton.style.display = "none";
      document.getElementById("prevImgButton").style.display = "none";
      document.getElementById("nextImgButton").style.display = "none";
      // hide painting info
      const key = $(
        "#nft_" +
          e.target.id.replace("nft_", "") +
          " a-image[name='currentImg']"
      )
        .attr("src")
        .replace("#", "");
      document.getElementById("imgInfo_" + key).style.display = "none";
      var likeButton = document.getElementById("likeButton");
      if (likeButton) likeButton.style.display = "none";
    });
  },
});
