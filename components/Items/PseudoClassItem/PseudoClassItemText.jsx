import styles from "../../ItemCard/ItemCard.module.sass";
export default function PseudoClassItemText() {
  return (
    <>
      <p>
        Användare kan integrerar en del på hemsidor, det kan vara med en knapp,
        en länk eller ett formulär. För att det ska bli tydligt för användaren
        att den kan integrera finns en del tillvägagångssätt, ett är att använda
        sig av pseudo-klasserna :hover, :focus och :active. Dessa skapar även en
        mer tillgänglig webb.
      </p>
      <p>
        Pseudo-klasserna standardläge beter sig och ser lite olika ut beroende
        på vilken typ av skärm samt webbläsare användare använder. När dessa
        stylas ska riktlinjer om till exempel färgkontrast tas med.
      </p>
      <p>
        Det är viktigt att styla pseudo-klasserna i ordning för att de ska
        fungera, :hover, :focus och :active.
      </p>
      <h4> :hover</h4>
      <p>
        {" "}
        :hover stylingen blir synlig först när användaren för musen över
        elementet, till exempel en knapp, den ändrar då utseende som indikerar
        på att användaren kan integrera med elementet. Användaren behöver inte
        aktivera elementet utan får information om att den kan integrerar med
        till exempel knappen. Denna funktion fungerar endast med mus.{" "}
      </p>
      <h4> :focus</h4>
      <p>
        {" "}
        :fokus klassen aktiveras när användaren integrerar med ett element. För
        en användare som använder ett tangentbord är det när den använt tab och
        ”står” på elementet. Vid användning av mus sker det först när användaren
        klickar på elementet och försvinner först när ett klick aktiveras på ett
        annat element. En utveckling av denna klass är :focus-visible som gör
        att stylingen enbart syns för användare som använder tangentbord. Det
        ger en större möjlighet att styla efter hemsidans grafiska uttryck.
      </p>
      <p>
        Idag finns :focus inbyggt i våra webbläsare. Dessa ska vi dock inte
        förlita oss på då en del inte är anpassade för till exempel dark mode
        som i sin tur gör dem svåra att se. Stylningen av :focus är viktig att
        den är tydlig då en användare inte kan förutse vart den kan integrera
        med på en hemsida.{" "}
      </p>
      <p>
        En viktig aspekt vid styling av :focus är att inte ta bort outline,
        skriva outline: none i koden. Användare som använder hjälpmedel för att
        navigera sig på webben bruka använda egna inställningar, dessa skriver
        över hemsidans egna. Om dessa tas bort försvinner även möjlighet för
        användarens egna inställningar att synas.{" "}
      </p>
      <h4> :active</h4>
      <p>
        {" "}
        :active används när ett element aktiveras, till exempel en knapp som
        blir klickad. Med en mus är det när mellan att klicket görs tills det
        släpps och på ett tangentbord är det när mellan enter trycks ner tills
        den släpps. Detta för att informera användaren om att integreringen
        aktiverades.
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability">
          https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3schools.com/tags/att_button_type.asp">
          https://www.w3schools.com/tags/att_button_type.asp
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href=" https://betterprogramming.pub/a11y-never-remove-the-outlines-ee4efc7a9968">
          https://betterprogramming.pub/a11y-never-remove-the-outlines-ee4efc7a9968
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/">
          https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/">
          https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/TR/WCAG20/#navigation-mechanisms">
          https://www.w3.org/TR/WCAG20/#navigation-mechanisms
        </a>
      </p>
    </>
  );
}
