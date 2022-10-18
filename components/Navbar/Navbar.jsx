import { useState } from "react";
import styles from "./Navbar.module.sass";
import Logo from "../../public/assets/icons/logo.svg";
import Image from "next/future/image";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Image className={styles.logo} src={Logo}></Image>

      <button type="button" name="Meny" onClick={() => setMenuIsOpen(!menuIsOpen)} className={styles.hamburgerButton}>
        <div className={styles.barsContainer}>
          <div className={styles.hamburgerBar}></div>
          <div className={styles.hamburgerBar}></div>
          <div className={styles.hamburgerBar}></div>
        </div>
        Meny
      </button>
    </nav>
  );
}
