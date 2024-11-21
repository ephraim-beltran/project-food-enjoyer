import styled from "./Contact.module.css";
export function Contact() {
  return (
    <section>
      <div className={styled.container}>
        <h2>Contact Us</h2>
        <div className={styled.name}>Green Routes</div>
        <address>350 Victoria Street, Toronto, ON M5B 2K3</address>
        <a href="mailto:greenroutes@gmail.com" l>
          greenroutes@gmail.com
        </a>
      </div>
    </section>
  );
}
