function like(imgId, locationName, uid) {
  const likesNode = database.ref().child(locationName + "/" + imgId + "/likes");

  likesNode.once("value").then((snap) => {
    likesNode
      .set({
        counts: snap.val().counts ? snap.val().counts + 1 : 0,
        uids: snap.val().uids ? [snap.val().uids, uid].join(",") : uid,
      })
      .then((snap) => {
        alert("Liked!");
      })
      .catch((error) => {
        alert(error);
      });
  });
}

function cancelLike(imgId, locationName, uid) {
  const likesNode = database.ref().child(locationName + "/" + imgId + "/likes");

  likesNode.once("value").then((snap) => {
    likesNode
      .set({
        counts: snap.val().counts - 1,
        uids: snap
          .val()
          .uids.split(",")
          .filter((id) => id !== uid)
          .join(","),
      })
      .then((snap) => {
        alert("Like canceled.");
      })
      .catch((error) => {
        alert(error);
      });
  });
}

function configLike(uid) {
  var likeButton = document.getElementById("likeButton");
  if (likeButton) {
    alert(likeButton);
    var locationName = likeButton.getAttribute("name");
    likeButton.addEventListener("click", (e) => {
      alert("like button clicked");
      var currentImg = document.querySelector(
        "#nft_" + locationName + " a-image[name='currentImg']"
      );
      const imgId = currentImg.getAttribute("src").substring(1);
      like(imgId, locationName, uid);
    });
    likeButton.addEventListener("touchend", (e) => {
      alert("like button clicked");
      var currentImg = document.querySelector(
        "#nft_" + locationName + " a-image[name='currentImg']"
      );
      const imgId = currentImg.getAttribute("src").substring(1);
      like(imgId, locationName, uid);
    });
  }
}
