import styled from "./Home.module.css";
import { Hero } from "../../features/Hero";
export function Home() {
  return (
    <>
      <Hero />
      <div>
        <div className={styled.heading}>
          <h2>Locations Near You</h2>
          <p>Explore Art Near You</p>
        </div>
        <div className={styled.card_grid}>
          <div>
            <img src="" alt="" />
            <span>Location Title</span>
            <span>123 Location Address</span>
            <span>1 distance away</span>
          </div>
        </div>
      </div>

      {/* TODO: Replace Testimonials with About Us */}
      <div>
        <div className={styled.heading}>
          <h2>Testimonials</h2>
          <p>What they say about us</p>
        </div>
        <div className={styled.card_grid}>
          <div className={styled.card_testimonial}>
            <span>Person Name</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              libero labore quisquam sapiente cum asperiores mollitia
              laboriosam, molestiae, numquam animi ipsa amet voluptatum sit!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
