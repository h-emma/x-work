import styles from "../../ItemCard/ItemCard.module.sass";

export default function ModalItemText() {
  return (
    <>
      <p>Text</p>

      <p>Mer Text</p>

      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://webbriktlinjer.se/riktlinjer/5-skriv-tydliga-lankar/">
          https://webbriktlinjer.se/riktlinjer/5-skriv-tydliga-lankar/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context/">
          https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.a11y-collective.com/the-perfect-link/">
          https://www.a11y-collective.com/the-perfect-link/
        </a>
      </p>
    </>
  );
}
