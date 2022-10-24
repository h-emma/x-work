import Link from "next/link";
import StartSectionText from "./StartSectionText";
import styles from "./StartSection.module.sass";

export default function StartSection() {
  return (
    <section className={styles.startSection}>
      <div className={styles.itemListContainer}>
        <h2>Innehållsförteckning</h2>
        <ul>
          <li>
            <Link href="">Button</Link>
          </li>
          <li>
            <Link href="">Button</Link>
          </li>
          <li>
            <Link href="#button-item" scroll={false}>
              Button
            </Link>
          </li>
        </ul>
      </div>
      <article className={styles.article}>
        <div className={styles.articleHeaderContainer}>
          <h1>Tillgänglighet</h1>
        </div>
        <StartSectionText />
      </article>
    </section>
  );
}
