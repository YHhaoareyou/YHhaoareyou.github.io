function like(imgId, locationName, uid) {
  const likesNode = database.ref().child(locationName + "/" + imgId + "/likes");

  likesNode.once("value").then((snap) => {
    const val = snap.val();
    if (val && val.uids.includes(uid)) {
      likesNode
        .set({
          counts: val.counts - 1,
          uids: val.uids
            .split(",")
            .filter((id) => id !== uid)
            .join(","),
        })
        .then((snap) => {
          alert("Like canceled.");
          const prevCounts = parseInt($("#likesCount").text());
          $("#likesCount").text(prevCounts - 1);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      likesNode
        .set({
          counts: val ? val.counts + 1 : 1,
          uids: val ? [val.uids, uid].join(",") : uid,
        })
        .then((snap) => {
          alert("Liked!");
          const prevCounts = parseInt($("#likesCount").text());
          $("#likesCount").text(prevCounts + 1);
        })
        .catch((error) => {
          alert(error);
        });
    }
  });
}
