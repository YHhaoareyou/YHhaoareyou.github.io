function switchToPrevPainting(e) {
  const locationName = e.target.getAttribute("location");
  console.log(e);
  console.log(locationName);
  var nft = document.getElementById("nft_" + locationName);
  const imgCnt = nft.getAttribute("imgCnt");
  console.log(imgCnt);

  // hide current image
  var currentImg = nft.querySelector("a-image[visible='true']");
  currentImg.setAttribute("visible", false);

  // display prev image
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  const prevImgIndex = currentImgIndex === 0 ? imgCnt - 1 : currentImgIndex - 1;
  var prevImg = nft.querySelector("a-image[index='" + prevImgIndex + "']");
  prevImg.setAttribute("visible", true);
}

function switchToNextPainting(e) {
  const locationName = e.target.getAttribute("location");

  // hide current image
  var currentImg = document
    .getElementById("nft_" + locationName)
    .querySelector("a-image[visible='true']");
  currentImg.setAttribute("visible", false);

  // display prev image
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  const nextImgIndex = currentImgIndex === imgCnt - 1 ? 0 : currentImgIndex + 1;
  var nextImg = document
    .getElementById("nft_" + locationName)
    .querySelector("a-image[index='" + nextImgIndex + "']");
  nextImg.setAttribute("visible", true);
}
