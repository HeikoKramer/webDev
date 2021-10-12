export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById("search").value.trim();
  const regex = /[ ]{2,}/gi; // looking for two spaces or more
  const searchTerm = rawSearchTerm.replaceAll(regex, " "); // replaces two or more spaces with a single space
  return searchTerm;
};