import styles from "../../ItemCard/ItemCard.module.sass";
export default function LinkItemText() {
  return (
    <>
      <p>
        Iconer som länkar använts flitigt tillexempel för Instagram och
        Facebook. För användare med skärmläsare behöver dessa tydliggöras, både
        vad det föreställer men också vart personen blir omdirigerad till. Sätt
        att göra det på är att länga till texten Instagram till ikonen, låta
        ikonen vara en &lt;img&gt; och lägga till en alt=&quot;&quot; eller en
        aria-label=&quot;&quot;.
      </p>

      <p className={styles.sourceParagraph}>
        Källa:{" "}
        <a href="https://www.a11y-collective.com/the-perfect-link/">
          https://www.a11y-collective.com/the-perfect-link/
        </a>
      </p>
    </>
  );
}
