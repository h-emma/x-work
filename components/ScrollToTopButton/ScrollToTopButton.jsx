import styles from "./ScrollToTopButton.module.sass";
import Image from "next/image";
import UpArrow from "../../public/assets/icons/arrow_up.svg";
import { useEffect, useRef } from "react";

export default function ScrollToTopButton(props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={() => {
        scrollToTop();
      }}
      className={styles.scrollButton}
    >
      <Image src={UpArrow}></Image>
    </button>
  );
}
