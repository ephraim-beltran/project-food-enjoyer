import styled from "./AboutUs.module.css";
import mountainTop from "assets/aboutus/mountain.png";
import venice from "assets/aboutus/venice.png";
import bridge from "assets/aboutus/bridge.png";
export function AboutUs() {
  return (
    <section>
      <div className={styled.container}>
        <div className={styled.imageContainer}>
          <div className={styled.bubble}>
            <img src={mountainTop} />
          </div>
          <div className={styled.bubble}>
            <img src={venice} />
          </div>
          <div className={styled.bubble}>
            <img src={bridge} />
          </div>
        </div>
        <div className={styled.description}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            exercitationem voluptates, nobis, dolores suscipit in tempore
            voluptatem quibusdam maxime quas magnam alias ex est. Ab non qui
            porro itaque facere?
          </p>
        </div>
      </div>
    </section>
  );
}
