import { urlGenerator } from "../utils/urlGenerator";
const url = import.meta.env.VITE_DATA_URL;
const token = import.meta.env.VITE_SHEETDB_TOKEN;

export async function fetchLocations(searchItem = "none", category = "all") {
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const apiUrl =
    (searchItem == "none") & (category == "all")
      ? url
      : `${urlGenerator(url, { searchItem, category })}`;

  console.log(`Fetching location for ${apiUrl}`);
  console.log(`Search for ${searchItem} and category ${category}`);
  try {
    const res = await fetch(apiUrl, options);
    if (!res.ok) throw Error("There was an error fetching data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`There was an error fetching resources at ${apiUrl}`);
    return "error";
  }
}
