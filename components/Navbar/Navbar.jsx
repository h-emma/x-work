import { useState } from "react";
import styles from "./Navbar.module.sass";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <button
        type="button"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className={styles.hamburgerButton}
      >
        <div className={styles.barsContainer}>
          <div className={styles.hamburgerBar}></div>
          <div className={styles.hamburgerBar}></div>
          <div className={styles.hamburgerBar}></div>
        </div>
        <p>Meny</p>
      </button>
    </nav>
  );
}
