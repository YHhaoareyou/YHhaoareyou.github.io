function switchToPrevPainting(e) {
  const locationName = e.target.getAttribute("name");
  console.log(locationName);
  var nft = document.getElementById("nft_" + locationName);
  console.log(nft);
  const imgCnt = nft.getAttribute("imgCnt");
  console.log(imgCnt);

  // hide current image
  console.log(nft.querySelector("a-image[visible='true']"));
  console.log(
    nft.querySelector("a-image[visible='true']").getAttribute("visible")
  );
  const currentImgIndex = parseInt(
    nft.querySelector("a-image[visible='true']").getAttribute("index")
  );
  nft.querySelector("a-image[visible='true']").setAttribute("visible", "false");
  console.log(nft.querySelector("a-image[index='" + currentImgIndex + "']"));
  console.log(
    nft
      .querySelector("a-image[index='" + currentImgIndex + "']")
      .getAttribute("visible")
  );

  // display prev image
  const prevImgIndex = currentImgIndex === 0 ? imgCnt - 1 : currentImgIndex - 1;
  console.log(nft.querySelector("a-image[index='" + prevImgIndex + "']"));
  console.log(
    nft
      .querySelector("a-image[index='" + prevImgIndex + "']")
      .getAttribute("visible")
  );
  nft
    .querySelector("a-image[index='" + prevImgIndex + "']")
    .setAttribute("visible", "true");
  console.log(nft.querySelector("a-image[index='" + prevImgIndex + "']"));
  console.log(
    nft
      .querySelector("a-image[index='" + prevImgIndex + "']")
      .getAttribute("visible")
  );
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
  console.log(currentImg.getAttribute("visible"));
  currentImg.setAttribute("visible", "false");
  console.log(currentImg);
  console.log(currentImg.getAttribute("visible"));

  // display prev image
  const currentImgIndex = parseInt(currentImg.getAttribute("index"));
  const nextImgIndex = currentImgIndex === imgCnt - 1 ? 0 : currentImgIndex + 1;
  var nextImg = nft.querySelector("a-image[index='" + nextImgIndex + "']");
  console.log(nextImg);
  console.log(nextImg.getAttribute("visible"));
  nextImg.setAttribute("visible", "true");
  console.log(nextImg);
  console.log(nextImg.getAttribute("visible"));
}
