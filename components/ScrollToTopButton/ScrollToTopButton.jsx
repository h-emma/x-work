import styles from "./ScrollToTopButton.module.sass";
import Image from "next/image";
import UpArrow from "../../public/assets/icons/list-icon.svg";
import { useEffect, useRef } from "react";

export default function ScrollToTopButton(itemList) {
  const scrollToTop = () => {
    itemList.itemList.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollButton = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        scrollButton.current && (scrollButton.current.style.display = "none");
      } else {
        scrollButton.current && (scrollButton.current.style.display = "block");
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
      <Image src={UpArrow} alt={""}></Image>
    </button>
  );
}
