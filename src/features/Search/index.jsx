import styled from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export function Search() {
  const [searchItem, setSearchItem] = useState("");
  const handleChange = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/search/${searchItem}`);
  };
  return (
    <section className={styled.hero_search}>
      <button className={styled.search_location}>
        <i className={styled.gps}>Use current location</i>
      </button>
      <input
        type="search"
        placeholder="Search a city or location"
        onChange={handleChange}
      />
      <label className={styled.search_category}>
        <select name="category" id="category">
          <option value="all" disabled defaultValue selected>
            Category
          </option>
          <option value="event">Event</option>
          <option value="location">Location</option>
          <option value="art piece">Art Piece</option>
        </select>
      </label>
      <button className={styled.search_button} onClick={handleClick}>
        Find Interests<i className={styled.search_icon}></i>
      </button>
    </section>
  );
}
