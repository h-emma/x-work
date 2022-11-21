import styles from "../../ItemCard/ItemCard.module.sass";

export default function ParagrafItemText() {
  return (
    <>
      <p>
        Stora delar av en hemsida består av text som placeras i paragrafer. För
        att göra mer tillgänglig för användaren är det viktigt att texten är
        tydlig samt kan läsas upp tydligt vid användning av en skärmläsare. Det
        är då viktigt att språket som hemsidan är skrivet i även är deklarerat i
        HTML koden. Till exempel är denna sidan skriven på svenska och där med
        är &lt;html lang = &quot; &quot;&gt; deklarerat till sv för att den ska
        läsas upp på svenska. De är även viktigt att skriva tydligt, lättläst
        och undvika till exempel att skriva 3-5, utan i stället skriva ut det, 3
        till 5 då en del skärmläsare har svårt att läsa ut det första exemplet
        med bindestreck.
      </p>
      <p>
        Det är även viktigt att konstraserna mellan texts färg och bakgrunden är
        tydlig. Mer om detta kan du läsa i stycket om
        <a href="#color-contrast-item">färgkontraster</a>.
      </p>
      <p>
        Ett sätt att göra text på en hemsida mer lättläst är att ge den en
        line-height, beroende på typsnitt bör den vara på 1.5 gånger
        textstorleken. Utrymmet mellan paragrafer bör vara mist 1.5 gånger
        utrymmet av line-heighten. Att placera text i justify text kan göra den
        svårläst och skapa stora mellanrum mellan orden. Att använda ett
        typsnitt som är i kategorin sans-serif är att eftersträva då det ger en
        mer lättläst text på en hemsida. Använd &lt;p&gt; för att separera text
        i stället för att använda tex &lt;br&gt; detta för att en del
        skärmläsare kan inte läsa &lt;br&gt;. När styling av text görs är det
        bra att skriva ut alla delar i cssen tex font-size, font-color och inte
        skriva en oneliner för det gör att användaren inte kan skriva över
        stylingen men sina egna default värden. Användaren ska kunna förstora
        texten med upp till 200% utan att behöva scrolla horisontalt i fullt
        fönster.
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://accessibility.huit.harvard.edu/accessibility-topics/text">
          https://accessibility.huit.harvard.edu/accessibility-topics/text
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://accessibility.psu.edu/headingshtml/">
          https://accessibility.psu.edu/headingshtml/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/TR/WCAG21/">
          https://www.w3.org/TR/WCAG21/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://medium.com/accessibility-a11y/5-best-html-practices-for-improving-web-page-accessibility-5870af65e979">
          https://medium.com/accessibility-a11y/5-best-html-practices-for-improving-web-page-accessibility-5870af65e979
        </a>
      </p>
    </>
  );
}
