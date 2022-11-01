import { useState, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.sass";
import Image from "next/image";
import NavPopUpMenu from "../NavPopUpMenu/NavPopUpMenu";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenuButton = useRef(null);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={"non-highlighted-text"}>
        <Image
          src="/assets/icons/logo.svg"
          alt="Loga,tillbaka till startsidan"
          width={80}
          height={80}
        />
      </Link>

      <ul className={styles.desktopLinksList}>
        <li className={styles.listObject}>
          <Link href="/">Hem</Link>
        </li>
        <li className={styles.listObject}>
          <Link href="om-oss">Om oss</Link>
        </li>
        <li className={styles.listObject}>
          <Link href="om-tillganglighet">Om tillgänglighet</Link>
        </li>
      </ul>

      <button
        type="button"
        name="öppna meny"
        id="openMenuButton"
        ref={openMenuButton}
        onClick={() => {
          setMenuIsOpen(true);
        }}
        className={styles.hamburgerButton}
      >
        <div className={styles.barsContainer}>
          <div className={styles.hamburgerBar}></div>
          <div className={styles.hamburgerBar}></div>
          <div className={styles.hamburgerBar}></div>
        </div>
        Meny
      </button>
      {menuIsOpen && (
        <NavPopUpMenu
          menuIsOpenState={setMenuIsOpen}
          openMenuButton={openMenuButton.current}
        />
      )}
    </nav>
  );
}
