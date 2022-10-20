import styles from "./ScrollToTopButton.module.sass";
import Image from "next/image";
import UpArrow from "../../public/assets/icons/arrow_up.svg";
import { useEffect, useRef } from "react";

export default function ScrollToTopButton(props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollButton = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        scrollButton.current.style.display = "none";
      } else {
        scrollButton.current.style.display = "block";
      }
    });
  }, []);

  return (
    <button
      ref={scrollButton}
      aria-hidden="true"
      onClick={() => {
        scrollToTop();
      }}
      className={styles.scrollButton}
    >
      <Image src={UpArrow}></Image>
    </button>
  );
}
