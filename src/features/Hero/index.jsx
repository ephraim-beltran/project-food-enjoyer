import styled from "./Hero.module.css";
import { Search } from "../Search";
export function Hero() {
  return (
    <section id="hero" className={styled.hero}>
      <div className={styled.hero_container}>
        <div className={styled.hero_text}>
          <span className={styled.hero_title}>Explore the art world</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo
          </p>
        </div>
        <Search />
      </div>
    </section>
  );
}
