export function urlGenerator(url, { searchItem, category }) {
  const link = new URL(`${url}/search_or`);
  if (searchItem != "none") {
    link.searchParams.append("name", `*${searchItem}*`);
    link.searchParams.append("location", `*${searchItem}*`);
  }
  if (category != "all") {
    category != "all" && link.searchParams.append("type", category);
  }

  return link.href;
}
