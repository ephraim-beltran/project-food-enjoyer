const apiUrl = import.meta.env.VITE_DATA_URL;
const apiToken = import.meta.env.VITE_SHEETDB_TOKEN;

export async function fetchLocations(url = apiUrl, token = apiToken) {
  const options = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw Error("There was an error fetching data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return "error";
  }
}
