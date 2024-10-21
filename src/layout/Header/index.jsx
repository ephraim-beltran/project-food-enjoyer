import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <header>
      <h1>Artful</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
