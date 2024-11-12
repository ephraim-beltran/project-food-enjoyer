import styled from "./LocationCard.module.css";
import noImage from "../../assets/no-image.png";
import { urlShortener } from "../../utils/urlShortener";

export function LocationCard({ location }) {
  return (
    <article className={styled.item_card}>
      <img src={noImage} />
      <div className={styled.item_info}>
        <h3>{location["Event/Location Name"]}</h3>
        <div className={styled.category}>{location["Type"]}</div>
        <div className={styled.address}>{location["Location/Address"]}</div>
        <a href={location["Website"]}>{urlShortener(location["Website"])}</a>
      </div>
    </article>
  );
}
