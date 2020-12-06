function switchToPrevPainting(e) {
  const locationName = e.target.getAttribute("name");
  var nft = document.getElementById("nft_" + locationName);
  const imgCnt = nft.getAttribute("imgCnt");

  // hide current image
  var currentImg = nft.querySelector("a-image[name='currentImg']");
  currentImg.setAttribute("visible", false);
  currentImg.setAttribute("name", "");
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  nft.querySelector("div#imgTitle_" + currentImgIndex).style.display = none;
  nft.querySelector("div#imgDes_" + currentImgIndex).style.display = none;

  // display prev image
  const prevImgIndex = currentImgIndex === 0 ? imgCnt - 1 : currentImgIndex - 1;
  var prevImg = nft.querySelector("a-image[index='" + prevImgIndex + "']");
  prevImg.setAttribute("visible", true);
  prevImg.setAttribute("name", "currentImg");
  nft.querySelector("div#imgTitle_" + prevImgIndex).style.display = block;
  nft.querySelector("div#imgDes_" + prevImgIndex).style.display = block;
}

function switchToNextPainting(e) {
  const locationName = e.target.getAttribute("name");
  var nft = document.getElementById("nft_" + locationName);
  const imgCnt = nft.getAttribute("imgCnt");

  // hide current image
  var currentImg = nft.querySelector("a-image[name='currentImg']");
  currentImg.setAttribute("visible", false);
  currentImg.setAttribute("name", "");
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  nft.querySelector("div#imgTitle_" + currentImgIndex).style.display = none;
  nft.querySelector("div#imgDes_" + currentImgIndex).style.display = none;

  // display prev image
  const nextImgIndex = currentImgIndex === imgCnt - 1 ? 0 : currentImgIndex + 1;
  var nextImg = nft.querySelector("a-image[index='" + nextImgIndex + "']");
  nextImg.setAttribute("visible", true);
  nextImg.setAttribute("name", "currentImg");
  nft.querySelector("div#imgTitle_" + prevImgIndex).style.display = block;
  nft.querySelector("div#imgDes_" + prevImgIndex).style.display = block;
}
