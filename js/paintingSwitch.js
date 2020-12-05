function switchToPrevPainting(e) {
  const locationName = e.target.getAttribute("name");
  var nft = document.getElementById("nft_" + locationName);
  const imgCnt = nft.getAttribute("imgCnt");

  // hide current image
  var currentImg = nft.querySelector("a-image[name='currentImg']");
  currentImg.setAttribute("visible", "false");
  currentImg.setAttribute("name", "");

  // display prev image
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  const prevImgIndex = currentImgIndex === 0 ? imgCnt - 1 : currentImgIndex - 1;
  var prevImg = nft.querySelector("a-image[index='" + prevImgIndex + "']");
  prevImg.setAttribute("visible", "true");
  prevImg.setAttribute("name", "currentImg");
}

function switchToNextPainting(e) {
  const locationName = e.target.getAttribute("name");
  var nft = document.getElementById("nft_" + locationName);
  const imgCnt = nft.getAttribute("imgCnt");

  // hide current image
  var currentImg = nft.querySelector("a-image[name='currentImg']");
  currentImg.setAttribute("visible", "false");
  currentImg.setAttribute("name", "");

  // display prev image
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  const nextImgIndex = currentImgIndex === imgCnt - 1 ? 0 : currentImgIndex + 1;
  var nextImg = nft.querySelector("a-image[index='" + nextImgIndex + "']");
  nextImg.setAttribute("visible", "true");
  nextImg.setAttribute("name", "currentImg");
}
