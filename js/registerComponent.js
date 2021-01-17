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

        // If login: display openCanvasButton & likeButton
        const uid = $("#state").data("uid");
        if (uid) {
          // display openCanvasButton
          var openCanvasButton = $("#openCanvasButton");
          if (openCanvasButton) {
            openCanvasButton.css("display", "block");
            // openCanvasButton onclick: display canvas
            openCanvasButton.on("click", (e) => {
              $("#newPaintCanvas").css("display", "block");
              $("#closeCanvasButton").css("display", "block");
              $("#toolPanel").css("display", "block");
              $("#save").attr("name", locationName);
            });
          }

          var aImage = $(
            "#nft_" + locationName + " a-image[name='currentImg']"
          );
          if (aImage) {
            const imgId = aImage.attr("src").replace("#", "");
            // display first painting info
            $("#imgInfo_" + imgId).css("display", "block");

            // display likeButton
            var likeButton = $("#likeButton");
            if (likeButton) {
              const likesNode = database
                .ref()
                .child(locationName + "/" + imgId + "/likes");
              likesNode.once("value").then((snap) => {
                $("#likesCount").text(snap.val() ? snap.val().counts : 0);
              });
              likeButton.css("display", "block");
              likeButton.attr("name", locationName);
              // likeButton onclick: like!
              likeButton.on("click", (e) => {
                var uid = $("#state").data("uid");
                like(imgId, locationName, uid);
              });
            }
          }
        }
      } catch (e) {
        alert(e);
      }
    });

    this.el.sceneEl.addEventListener("markerLost", (e) => {
      // Remove listeners
      $("#openCanvasButton").off("click");
      $("#likeButton").off("click");

      // Hide buttons
      $("#openCanvasButton").css("display", "none");
      $("#prevImgButton").css("display", "none");
      $("#nextImgButton").css("display", "none");
      $("#likeButton").css("display", "none");

      // hide painting info
      const key = $(
        "#nft_" +
          e.target.id.replace("nft_", "") +
          " a-image[name='currentImg']"
      )
        .attr("src")
        .replace("#", "");
      $("#imgInfo_" + key).css("display", "none");
    });
  },
});
