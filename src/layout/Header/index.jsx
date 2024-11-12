import { NavLink } from "react-router-dom";
import styled from "./Header.module.css";

const navList = [
  { text: "Home", path: "/" },
  { text: "Discover", path: "/discover" },
  { text: "Contact", path: "/contact" },
  { text: "About Us", path: "/about-us" },
];
export function Header() {
  return (
    <header className={styled.header}>
      <h1 className={styled.h1}>Green Routes</h1>
      <nav className={styled.nav}>
        <ul className={styled.nav_list}>
          {navList.map((item, index) => {
            return (
              <li key={`nav-list-${index + 1}`}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? styled.active_nav : ""
                  }
                >
                  {item.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <label>
        <select
          name="language"
          id="language"
          className={styled.language_selector}
        >
          <option value="english">EN</option>
        </select>
      </label>
    </header>
  );
}
