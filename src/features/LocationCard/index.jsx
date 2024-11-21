import styled from "./LocationCard.module.css";
import noImage from "../../assets/no-image.png";
import { urlShortener } from "../../utils/urlShortener";

export function LocationCard({ location }) {
  return (
    <article className={styled.item_card}>
      <img src={noImage} />
      <div className={styled.item_info}>
        <h3>{location.name}</h3>
        <div className={styled.category}>{location.type}</div>
        <div className={styled.address}>{location.location}</div>
        <a href={location.website}>{urlShortener(location.website)}</a>
      </div>
    </article>
  );
}
