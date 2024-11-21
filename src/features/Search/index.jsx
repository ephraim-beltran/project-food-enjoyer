import styled from "./Search.module.css";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
export function Search() {
  const [searchItem, setSearchItem] = useState("");
  const [category, setCategory] = useState("all");
  const handleChange = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const [_, setSearch] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    if (location.pathname == "/") {
      navigate("/discover");
    }
    setSearch({ search: searchItem, category });
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
        <select name="category" id="category" onChange={handleCategoryChange}>
          <option value="all" disabled defaultValue selected>
            Category
          </option>
          <option value="Events/Community Organization">Events</option>
          <option value="Clothing and Retail">Clothing and Retail</option>
          <option value="Green Spaces">Green Spaces</option>
        </select>
      </label>
      <button className={styled.search_button} onClick={handleClick}>
        Find Interests<i className={styled.search_icon}></i>
      </button>
    </section>
  );
}
