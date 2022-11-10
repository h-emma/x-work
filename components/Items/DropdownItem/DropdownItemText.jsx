import styles from "../../ItemCard/ItemCard.module.sass";
export default function DropdownItemText() {
  return (
    <>
      <p>
        En drop-down—även kallad fly-out—är en meny som används för att på ett kompakt sätt samla en hemsidas länkar
        till ett strukturerat och lättillgängligt format för användaren. Ofta i anslutning till en navbar, men den kan
        även användas på andra ställen.
      </p>
      <p>
        Principen är att sortera länkar i ett listformat som går att öppna och stänga och som följer en naturlig
        hierarki av hemsidans sidor och undersidor. Detta frigör plats på hemsidan när drop-downen inte är öppen.
        Förutom att hantera länkar, kan en drop-down även användas för att visa och dölja andra verktyg och funktioner.
      </p>
      <p>
        Även om en drop-down på många sätt kan göra en hemsida både mer strukturerad och spara plats, kan den
        introducera problem för användare med särskilda behov om den inte utformas på rätt sätt. Idéalt kan det, om
        möjligt, vara en idé att repetera drop-downens underlänkar någon annanstans på deras respektive huvudsida.
      </p>
      <p>
        Användare av drop-downen kan i stort delas in i två grupper när man tänker på funktion. Muspekare- och
        tangentbordanvändare.
      </p>
      <h4>Muspekare</h4>
      <p>
        Om drop-downens undermenyer öppnas genom att hovra (i motsats till att trycka på en knapp) är det viktigt att
        lägga till en fördröjning på när den stängs om muspekaren skulle råka hamna utanför en kortare tid. Detta för
        att underlätta för användare med t.ex. skakningar eller inmatningsenheter som inte är exakta.
      </p>
      <h4>Tangentbord</h4>
      <p>
        För tangentbordsanvändare bör inte menyerna öppnas när man trycker sig igenom huvudkategorierna. Detta för att
        användaren inte ska behöva ta sig igenom undermenyerna för att komma till nästa huvudkategori.
      </p>
      <p>För att öppna en meny med tangentbord finns i princip två sätt:</p>
      <p>
        Om huvudkategorin bara är en beskrivande text och inte en tryckbar länk i sig, kan menyn helt enkelt öppnas och
        stängas genom att man trycker på enter.
      </p>
      <p>
        Om huvudkategorin däremot är en tryckbar länk kan man lägga till en extra navigerbar knapp, t.ex. bredvid länken
        som öppnar/stänger menyn.
      </p>
      <h4>Aria-labels</h4>
      <p>
        Varje huvudkategori i drop-downen som har en undermeny bör ha en aria-label “aria-expanded” satt till “true”
        eller “false” beroende på om den är öppnad eller ej. Detta för att underlätta för olika
        tillgänglighetsfunktioner och enheter.
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/WAI/tutorials/menus/flyout/">https://www.w3.org/WAI/tutorials/menus/flyout/</a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded">
          https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded
        </a>
      </p>
    </>
  );
}
