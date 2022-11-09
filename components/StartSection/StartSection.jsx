import react from "react";
import Link from "next/link";
import StartSectionText from "./StartSectionText";
import styles from "./StartSection.module.sass";

const StartSection = react.forwardRef((props, ref) => {
  return (
    <section className={styles.startSection}>
      <article className={styles.article}>
        <div className={styles.articleHeaderContainer}>
          <h1>Tillgänglighet</h1>
        </div>
        <StartSectionText />
      </article>

      <section className={styles.itemListContainer}>
        <h2 tabIndex={0} ref={ref}>
          Index
        </h2>
        <ul>
          <li>
            <Link
              href="#animation-item"
              scroll={false}
              onClick={() => {
                document.getElementById("animation-item").focus();
              }}
            >
              Animationer
            </Link>
          </li>
          <li>
            <Link
              href="#button-item"
              scroll={false}
              onClick={() => {
                document.getElementById("button-item").focus();
              }}
            >
              Button
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
            <Link
              href="#form-item"
              scroll={false}
              onClick={() => {
                document.getElementById("form-item").focus();
              }}
            >
              Form
            </Link>
          </li>
          <li>
            <Link
              href="#color-contrast-item"
              scroll={false}
              onClick={() => {
                document.getElementById("color-contrast-item").focus();
              }}
            >
              Färgkontrast
            </Link>
          </li>
          <li>
            <Link
              href="#heading-item"
              scroll={false}
              onClick={() => {
                document.getElementById("heading-item").focus();
              }}
            >
              Heading
            </Link>
          </li>
          <li>
            <Link
              href="#image-item"
              scroll={false}
              onClick={() => {
                document.getElementById("image-item").focus();
              }}
            >
              Image
            </Link>
          </li>
          <li>
            <Link
              href="#link-item"
              scroll={false}
              onClick={() => {
                document.getElementById("link-item").focus();
              }}
            >
              Link
            </Link>
          </li>
          <li>
            <ul>
              <li>
                <Link
                  href="#link-icon-item"
                  scroll={false}
                  onClick={() => {
                    document.getElementById("link-icon-item").focus();
                  }}
                >
                  Link-Icon
                </Link>
              </li>

              <li>
                <Link
                  href="#link-mailto-item"
                  scroll={false}
                  onClick={() => {
                    document.getElementById("link-mailto-item").focus();
                  }}
                >
                  Link-mailto
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              href="#paragraph-item"
              scroll={false}
              onClick={() => {
                document.getElementById("paragraph-item").focus();
              }}
            >
              Paragraph
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
});

export default StartSection;
