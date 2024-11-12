export function urlShortener(url) {
  let link;
  try {
    link = new URL(url);
  } catch (_) {
    return null;
  }
  return link.hostname;
}
