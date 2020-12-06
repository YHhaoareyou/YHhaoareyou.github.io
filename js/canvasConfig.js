function closeCanvas() {
  document.getElementById("newPaintCanvas").style.display = "none";
  document.getElementById("closeCanvasButton").style.display = "none";
  document.getElementById("toolPanel").style.display = "none";
}

function saveCanvas(canvas, locationName) {
  var imageName = prompt("Please enter image name");
  canvas.toBlob(function(blob) {
    var image = new Image();
    image.src = blob;
    const uploadTimestamp = Date.now();
    var uploadTask = storage
      .ref()
      .child("images/" + imageName)
      .put(blob)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(imageUrl => {
        database
          .ref()
          .child(locationName + "/" + uploadTimestamp)
          .set({
            name: imageName,
            url: imageUrl,
            timestamp: uploadTimestamp,
            user: "tester"
          })
          .then(function(snap) {
            alert("Uploaded! Refresh the page to see your materpiece!");
          })
          .catch(error => {
            alert(error);
          });
      });
  });
}

function configCanvas() {
  var canvas = document.getElementById("newPaintCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.8;
  var context = canvas.getContext("2d");
  var boundings = canvas.getBoundingClientRect();

  var mouseX = 0;
  var mouseY = 0;
  context.strokeStyle = "black";
  context.lineWidth = 3;
  var isDrawing = false;

  var colors = document.getElementsByClassName("colors")[0];

  colors.addEventListener("click", function(event) {
    context.strokeStyle = event.target.value || "#000000";
  });

  var brushes = document.getElementsByClassName("brushes")[0];

  brushes.addEventListener("click", function(event) {
    context.lineWidth = event.target.value || 3;
  });

  canvas.addEventListener("touchstart", function(event) {
    setMouseCoordinates(event);
    isDrawing = true;

    context.beginPath();
    context.moveTo(mouseX, mouseY);
  });

  canvas.addEventListener("touchmove", function(event) {
    setMouseCoordinates(event);

    if (isDrawing) {
      context.lineTo(mouseX, mouseY);
      context.stroke();
    }
  });

  canvas.addEventListener("touchend", function(event) {
    setMouseCoordinates(event);
    isDrawing = false;
  });

  function setMouseCoordinates(event) {
    mouseX = event.touches[0].clientX - boundings.left;
    mouseY = event.touches[0].clientY - boundings.top;
  }

  var clearButton = document.getElementById("clear");

  clearButton.addEventListener("click", function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var saveButton = document.getElementById("save");

  saveButton.addEventListener("click", e => {
    const locationName = e.target.getAttribute("name");
    saveCanvas(canvas, locationName);
  });
}
