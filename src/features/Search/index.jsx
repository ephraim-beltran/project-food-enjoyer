import styled from "./Search.module.css";
export function Search() {
  return (
    <section className={styled.hero_search}>
      <button className={styled.search_location}>
        <i className={styled.gps}>Use current location</i>
      </button>
      <input type="search" placeholder="Search a city or location" />
      <label className={styled.search_category}>
        <select name="category" id="category">
          <option value="all" disabled defaultValue>
            Category
          </option>
          <option value="event">Event</option>
          <option value="location">Location</option>
          <option value="art piece">Art Piece</option>
        </select>
      </label>
      <button className={styled.search_button}>
        Find Interests<i className={styled.search_icon}></i>
      </button>
    </section>
  );
}
