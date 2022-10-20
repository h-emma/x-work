import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.sass";
import Logo from "../../public/assets/icons/logo.svg";
import Image from "next/future/image";
import NavPopUpMenu from "../NavPopUpMenu/NavPopUpMenu";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image className={styles.logo} src={Logo} alt="Loga"></Image>
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
          <Link href="om-tillgänglighet">
            <a>Om tillgänglighet</a>
          </Link>
        </li>
      </ul>

      <button
        type="button"
        name="open meny"
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
