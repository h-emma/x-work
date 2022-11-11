import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./NavPopUpMenu.module.sass";

export default function NavPopUpMenu({ menuIsOpenState, openMenuButton, pageIndex }) {
  const homeLink = useRef(null);

  useEffect(() => {
    homeLink.current.focus();
    document.body.style.position = "fixed";
  }, []);

  const closeMenu = () => {
    menuIsOpenState(false);
    openMenuButton.focus();
    document.body.style.position = "relative";
  };

  return (
    <div className={styles.menu}>
      <div className={styles.closeButtonContainer}>
        <button
          type="button"
          name="stäng meny"
          id="closeMenuButton"
          onClick={() => {
            closeMenu();
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
            <Link
              href="/"
              ref={homeLink}
              onClick={() => {
                pageIndex === 0 && closeMenu();
              }}
            >
              Hem
            </Link>
          </li>
          <li>
            <Link
              href="/om-oss"
              onClick={() => {
                pageIndex === 1 && closeMenu();
              }}
            >
              Om oss
            </Link>
          </li>
          <li>
            <Link
              href="/om-tillganglighet"
              onClick={() => {
                pageIndex === 2 && closeMenu();
              }}
            >
              Om tillgänglighet
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
