function like(imgId, locationName, uid) {}

function cancelLike(imgId, locationName, uid) {}

function configLike(uid) {
  var likeButton = document.getElementById("likeButton");

  likeButton.addEventListener("click", (e) => {
    console.log("like button clicked");
  });
}
