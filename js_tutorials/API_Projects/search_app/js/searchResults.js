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

