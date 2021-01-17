AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.el.sceneEl.addEventListener("markerFound", (e) => {
      // const locationName = e.target.getAttribute("location");
      try {
        const locationName = e.target.id.replace("nft_", ""); // Display painting switching buttons
        var prevImgButton = document.getElementById("prevImgButton");
        var nextImgButton = document.getElementById("nextImgButton");
        prevImgButton.style.display = "block";
        nextImgButton.style.display = "block";
        prevImgButton.setAttribute("name", locationName);
        nextImgButton.setAttribute("name", locationName);

        var openCanvasButton = document.getElementById("openCanvasButton");
        if (openCanvasButton) {
          openCanvasButton.style.display = "block";
          openCanvasButton.addEventListener("click", (e) => {
            document.getElementById("newPaintCanvas").style.display = "block";
            document.getElementById("closeCanvasButton").style.display =
              "block";
            document.getElementById("toolPanel").style.display = "block";
            document.getElementById("save").setAttribute("name", locationName);
          });
        }

        var likeButton = document.getElementById("likeButton");
        if (likeButton) {
          likeButton.style.display = "block";
          likeButton.addEventListener("click", (e) => {
            alert("clicked!");
          });
        }

        // var likeButton = $("#likeButton");
        // if (likeButton) {
        //   alert("like button found");
        //   likeButton.css("display", "block");
        //   likeButton.on("click", function () {
        //     alert("like button clicked");
        //     // var currentImg = $(
        //     //   "#nft_" + locationName + " a-image[name='currentImg']"
        //     // );
        //     // alert(currentImg);
        //     // if (currentImg) {
        //     //   const imgId = currentImg.attr("src").substring(1);
        //     //   alert(imgId);
        //     //   // like(imgId, locationName, uid);
        //     // }
        //   });
        // }

        if (document.querySelector("#nft_" + locationName + " a-image")) {
          const key = document
            .querySelector(
              "#nft_" + locationName + " a-image[name='currentImg']"
            )
            .getAttribute("src")
            .replace("#", "");
          // display first painting info
          document.getElementById("imgInfo_" + key).style.display = "block";

          var likeButton = document.getElementById("likeButton");
          if (likeButton) {
            likeButton.style.display = "block";
            likeButton.setAttribute("name", locationName);
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
      const key = document
        .querySelector(
          "#nft_" +
            e.target.id.replace("nft_", "") +
            " a-image[name='currentImg']"
        )
        .getAttribute("src")
        .replace("#", "");
      document.getElementById("imgInfo_" + key).style.display = "none";
      var likeButton = document.getElementById("likeButton");
      if (likeButton) likeButton.style.display = "none";
    });
  },
});
