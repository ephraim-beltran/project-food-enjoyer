import styled from "./Footer.module.css";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className={styled.footer}>
      <h2>Footer</h2>
      <div className={styled.footer_container}>
        <section>
          <h3 className={styled.footer_title}>Artful</h3>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              aliquam natus consectetur quae earum. Voluptatibus, officia! A
              voluptatem nostrum ducimus quis placeat aliquid commodi, quia
              nulla culpa doloremque natus amet?
            </p>
          </div>
        </section>
        <section>
          <h3 className={styled.footer_heading}>Links</h3>
          <ul>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 className={styled.footer_heading}>Categories</h3>
          <ul>
            <li>
              <Link to="/discover">Art</Link>
            </li>
            <li>
              <Link to="/discover">Events</Link>
            </li>
            <li>
              <Link to="/discover">Locations</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 className={styled.footer_heading}>Contact</h3>
          <address>
            350 Victoria Street
            <br />
            Toronto, ON M5B 2K3
            <br />
            <a href="mailto:greenroutes@gmail.com">greenroutes@gmail.com</a>
          </address>
        </section>
      </div>
    </footer>
  );
}
