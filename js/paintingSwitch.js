function switchToPrevPainting(e) {
  const locationName = e.target.getAttribute("name");
  console.log(locationName);
  var nft = document.getElementById("nft_" + locationName);
  console.log(nft);
  const imgCnt = nft.getAttribute("imgCnt");
  console.log(imgCnt);

  // hide current image
  var currentImg = nft.querySelector("a-image[visible='true']");
  console.log(currentImg);
  currentImg.setAttribute("visible", false);
  console.log(currentImg);

  // display prev image
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  const prevImgIndex = currentImgIndex === 0 ? imgCnt - 1 : currentImgIndex - 1;
  var prevImg = nft.querySelector("a-image[index='" + prevImgIndex + "']");
  console.log(prevImg);
  prevImg.setAttribute("visible", true);
  console.log(prevImg);
}

function switchToNextPainting(e) {
  const locationName = e.target.getAttribute("name");
  console.log(locationName);
  var nft = document.getElementById("nft_" + locationName);
  console.log(nft);
  const imgCnt = nft.getAttribute("imgCnt");
  console.log(imgCnt);

  // hide current image
  var currentImg = nft.querySelector("a-image[visible='true']");
  console.log(currentImg);
  currentImg.setAttribute("visible", false);
  console.log(currentImg);

  // display prev image
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  const nextImgIndex = currentImgIndex === imgCnt - 1 ? 0 : currentImgIndex + 1;
  var nextImg = nft.querySelector("a-image[index='" + nextImgIndex + "']");
  console.log(nextImg);
  nextImg.setAttribute("visible", true);
  console.log(nextImg);
}
