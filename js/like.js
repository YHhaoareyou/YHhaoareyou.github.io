function like(imgId, locationName, uid) {
  alert("liked button clicked!");
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
