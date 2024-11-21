import styled from "./Home.module.css";
import { Hero } from "../../features/Hero";
import { AboutUs } from "features/AboutUs";
export function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
    </>
  );
}
