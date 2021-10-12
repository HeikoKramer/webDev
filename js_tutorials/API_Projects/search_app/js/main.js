import { setSearchFocus } from "./searchBar.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  setSearchFocus();

  // 3 listeners clear text

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

// Procedural "workflow" function
const submitTheSearch = (event) => {
  event.preventDefault();
  // delete search results
  processTheSearch();
  setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
  // clear the stats line
  const searchTerm = getSearchTerm();
};