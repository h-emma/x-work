import styles from "../../ItemCard/ItemCard.module.sass";

export default function LinkItemText() {
  return (
    <>
      <p>
        Många hemsidor har någonstans på sin sida en länk till sin mail och
        dessa kan se olika ut. När det gäller tillgänglighet finns det några
        saker att tänka på.
      </p>
      <p>
        &lt;a
        href=&quot;mailto:en-mail-adress@mail.com&quot;&gt;Adressen&lt;/a&gt; Så
        ser koden ut för att länka till en mailadress. Om användaren har en
        mailklient lokalt på datorn exempelvis Apple Mail på Mac eller Outlook
        öppnas en sådan länk där. Använder användaren istället en webbaserad
        klient kommer länken öppnas i webbläsaren som en vanlig länk. Som nämt
        innan i stycket om allmänt om länkar öppnas även denna länk
        standardiserat i samma fönster. Det kan vara till fördel att skicka ut
        mailadressen och inte enbart ”Maila till oss”. Detta då det ger
        användare möjlighet att kopiera mailadressen och göra det på en annan
        device eller vid ett senare tillfälle.
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://css-tricks.com/all-about-mailto-links/">
          https://css-tricks.com/all-about-mailto-links/
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
