import styled from "./Footer.module.css";
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
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </section>
        <section>
          <h3 className={styled.footer_heading}>Categories</h3>
          <ul>
            <li>
              <a href="#">Art</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Locations</a>
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
            <a href="tesl:+11234567890">(123) 456-7890</a>
            <br />
            <a href="mailto:artful@gmail.com">artful@gmail.com</a>
          </address>
        </section>
      </div>
    </footer>
  );
}
