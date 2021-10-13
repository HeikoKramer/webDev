export const buildSearchResults = (resultArray) => {
  resultArray.forEach(result => {
    const resultItem = createResultItem(result);
    const resultContent = document.createElement("div");
    resultContent.classList.add("resultContents");
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContent.append(resultImage);
    }
    const resultText = createResultText(result);
    resultContent.append(resultText);
    resultItem.append(resultContent);
    const searchResults = document.getElementById("searchResults");
    searchResults.append(resultItem);
  });
}

const createResultItem = (result) => {
  const resultItem = document.createElement("div");
  resultItem.classList.add("resultItem");
  const resultTitle = document.createElement("div");
  resultTitle.classList.add("resultTitle");
  const link = document.createElement("a");
  link.href = `https://en.wikipedia.org/?curid=${result.id}`;
  link.textContent = result.title;
  link.target = "_blank";
  resultTitle.append(link);
  resultItem.append(resultTitle);
  return resultItem;
}

const createResultImage = (result) => {
  const resultImage = document.createElement("div");
  resultImage.classList.add("resultImage");
  const img = document.createElement("img");
  img.scr = result.img;
  img.alt = result.title;
  resultImage.append(img);
  return resultImage;
}