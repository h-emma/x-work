import styles from "../../ItemCard/ItemCard.module.sass";
export default function ButtonItemText() {
  return (
    <>
      <p>
        Det finns tre typer av knappar, submit, reset och button. En submit
        skickar den aktuella datan vilket även är elementet Button standardläge.
        Reset återställer den aktuella datan och typen button måste kontrolleras
        med hjälp av javascript, tillexempel med ett onClick. Anledningen till
        att standardläget för elementet är submit beror på att från början
        användes främst i formulär. Idag används elementet i större utsträckning
        och har inte alltid en submit funktion, där av är det till fördel att
        deklarera vilken typ av knapp det är, type=”button”. Då olika webbläsare
        använder olika standarder av styling för de olika typerna av elementet
        ger deklaration av typ en fördel i det anseendet.
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://html.com/attributes/button-type/">
          https://html.com/attributes/button-type/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3schools.com/tags/att_button_type.asp">
          https://www.w3schools.com/tags/att_button_type.asp
        </a>
      </p>
      <h4>Buttons innehåller ikoner</h4>
      <p>
        En del knappar består enbart av en ikon och saknar då ett namn vilket
        gör att en skärmläsare inte kan förmedla knappens innehåll eller
        funktion till användaren. För att tydliggöra knappens innehåll eller
        funktion för en användare läggs name=”” till inne i knappen. Men det kan
        också vara en idé att låta en text finnas också, inte alla användare har
        förståelse över vad ikonen förmedlar.
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">
          https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
        </a>
      </p>
      <h4>Buttons storlek</h4>
      <p>
        Knappens storlek har en avgörande roll för hur tillgänglig den är.
        Rekommendationen från WCAG som ger nivå AAA är att en knapp som inte är
        aktiv är 44px gånger 44px. Det är även bra att ge utrymme mellan olika
        knappar för att minska riken att användaren klickar fel.{" "}
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href=" https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">
          https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">
          https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
        </a>
      </p>
    </>
  );
}
