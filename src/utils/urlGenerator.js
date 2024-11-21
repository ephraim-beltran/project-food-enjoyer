export function urlGenerator(url, searchItem) {
  const filteredSearch = searchItem.replace(" ", "%20").replace("&", "%26");
  return `${url}/search_or?name=*${filteredSearch}*&location=*${filteredSearch}*`;
}
