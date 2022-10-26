import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./NavPopUpMenu.module.sass";

export default function NavPopUpMenu({ menuIsOpenState, openMenuButton }) {
  const homeLink = useRef(null);

  useEffect(() => {
    homeLink.current.focus();
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
            openMenuButton.focus();
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
            <Link href="/">
              <a ref={homeLink}>Hem</a>
            </Link>
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
