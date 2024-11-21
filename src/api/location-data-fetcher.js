import { urlGenerator } from "../utils/urlGenerator";
const url = import.meta.env.VITE_DATA_URL;
const token = import.meta.env.VITE_SHEETDB_TOKEN;

export async function fetchLocations(searchItem = "none") {
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const apiUrl =
    searchItem != "none" ? `${urlGenerator(url, searchItem)}` : url;

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
