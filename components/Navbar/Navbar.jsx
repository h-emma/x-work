import { useState } from "react";
import styles from "./Navbar.module.sass";
import Logo from "../../public/assets/icons/logo.svg";
import Image from "next/future/image";
import NavPopUpMenu from "../NavPopUpMenu/NavPopUpMenu";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Image className={styles.logo} src={Logo}></Image>

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
