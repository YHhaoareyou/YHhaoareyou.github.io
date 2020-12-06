function switchToPrevPainting(e) {
  const locationName = e.target.getAttribute("name");
  var nft = document.getElementById("nft_" + locationName);
  const imgCnt = nft.getAttribute("imgCnt");

  // hide current image
  var currentImg = nft.querySelector("a-image[name='currentImg']");
  currentImg.setAttribute("visible", false);
  currentImg.setAttribute("name", "");

  // hide current image info
  const currentImgKey = currentImg.getAttribute("src").replace("#", "");
  document.getElementById("imgTitle_" + currentImgKey).style.display = "none";
  document.getElementById("imgDes_" + currentImgKey).style.display = "none";

  // display prev image
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  const prevImgIndex = currentImgIndex === 0 ? imgCnt - 1 : currentImgIndex - 1;
  var prevImg = nft.querySelector("a-image[index='" + prevImgIndex + "']");
  prevImg.setAttribute("visible", true);
  prevImg.setAttribute("name", "currentImg");

  // display prev image info
  const prevImgKey = prevImg.getAttribute("src").replace("#", "");
  document.getElementById("imgTitle_" + prevImgKey).style.display = "none";
  document.getElementById("imgDes_" + prevImgKey).style.display = "none";
}

function switchToNextPainting(e) {
  const locationName = e.target.getAttribute("name");
  var nft = document.getElementById("nft_" + locationName);
  const imgCnt = nft.getAttribute("imgCnt");

  // hide current image
  var currentImg = nft.querySelector("a-image[name='currentImg']");
  currentImg.setAttribute("visible", false);
  currentImg.setAttribute("name", "");

  // hide current image info
  const currentImgKey = currentImg.getAttribute("src").replace("#", "");
  document.getElementById("imgTitle_" + currentImgKey).style.display = "none";
  document.getElementById("imgDes_" + currentImgKey).style.display = "none";

  // display next image
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  const nextImgIndex = currentImgIndex === imgCnt - 1 ? 0 : currentImgIndex + 1;
  var nextImg = nft.querySelector("a-image[index='" + nextImgIndex + "']");
  nextImg.setAttribute("visible", true);
  nextImg.setAttribute("name", "currentImg");

  // display next image info
  const nextImgKey = nextImg.getAttribute("src").replace("#", "");
  document.getElementById("imgTitle_" + nextImgKey).style.display = "block";
  document.getElementById("imgDes_" + nextImgKey).style.display = "block";
}
