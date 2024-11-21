import loader from "assets/loading.png";
import styled from "./Loading.module.css";
export function Loading() {
  return (
    <section className={styled.container}>
      <div className={styled.loader}>
        <img src={loader} />
      </div>
    </section>
  );
}
