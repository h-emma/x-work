import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.sass";
import Image from "next/future/image";
import NavPopUpMenu from "../NavPopUpMenu/NavPopUpMenu";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <Image src="/assets/icons/logo.svg" alt="Loga,tillbaka till startsidan" width={86} height={81} />
        </a>
      </Link>

      <ul className={styles.desktopLinksList}>
        <li className={styles.listObject}>
          <Link href="/">
            <a>Hem</a>
          </Link>
        </li>
        <li className={styles.listObject}>
          <Link href="om-oss">
            <a>Om oss</a>
          </Link>
        </li>
        <li className={styles.listObject}>
          <Link href="om-tillganglighet">
            <a>Om tillgänglighet</a>
          </Link>
        </li>
      </ul>

      <button
        type="button"
        name="öppna meny"
        id="openMenuButton"
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
      {menuIsOpen && <NavPopUpMenu menuIsOpenState={setMenuIsOpen} />}
    </nav>
  );
}
