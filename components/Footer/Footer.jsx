import styles from "./Footer.module.sass";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pageLinkContainer}>
        <Link href="/">Hem</Link>
        <Link href="om-oss">Om oss</Link>
        <Link href="om-tillgänglighet">Om tillgänglighet</Link>
      </div>
    </footer>
  );
}
