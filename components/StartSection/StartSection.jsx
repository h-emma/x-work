import react from "react";
import Link from "next/link";
import StartSectionText from "./StartSectionText";
import styles from "./StartSection.module.sass";

const StartSection = react.forwardRef((props, ref) => {
  return (
    <section className={styles.startSection}>
      <div className={styles.itemListContainer}>
        <h2 tabIndex={0} ref={ref}>
          Innehållsförteckning
        </h2>
        <ul>
          <li>
            <Link
              href="#link-item"
              scroll={false}
              onClick={() => {
                document.getElementById("link-item").focus();
              }}
            >
              Link/Anchor
            </Link>
          </li>

          <li>
            <Link
              href="#dropdown-item"
              scroll={false}
              onClick={() => {
                document.getElementById("dropdown-item").focus();
              }}
            >
              Dropdown
            </Link>
          </li>
          <li>
            <Link href="">Button</Link>
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
});

export default StartSection;
