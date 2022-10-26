import Link from "next/link";
import { useEffect } from "react";
import styles from "./NavPopUpMenu.module.sass";

export default function NavPopUpMenu({ menuIsOpenState }) {
  const focusOnMenuButton = () => {
    document.getElementById("openMenuButton").focus();
  };

  useEffect(() => {
    document.getElementById("closeMenuButton").focus();
  }, []);

  return (
    <div className={styles.menu}>
      <div className={styles.closeButtonContainer}>
        <button
          type="button"
          name="stäng meny"
          id="closeMenuButton"
          onClick={() => {
            menuIsOpenState(false);
            focusOnMenuButton();
          }}
          className={styles.closeButton}
        >
          <div className={[styles.xBarOne]}></div>
          <div className={styles.xBarTwo}></div>
        </button>
      </div>
      <div className={styles.linksContainer}>
        <ul>
          <li>
            <Link href="/">Hem</Link>
          </li>
          <li>
            <Link href="/om-oss">Om oss</Link>
          </li>
          <li>
            <Link href="/om-tillganglighet">Om tillgänglighet</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
