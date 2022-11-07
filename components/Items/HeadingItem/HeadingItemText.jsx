import styles from "../../ItemCard/ItemCard.module.sass";
export default function HeadingItemText() {
  return (
    <>
      <p>
        Att använda rubriker på hemsidor är vanligt och en del i att göra
        innehållet mer läsbart och lättnavigerat för användare. Rubrikerna, även
        kallade headning finns i flera olika nivåer och har en avgörande roll
        för skärmläsare. Varje sida ska ha en unik &lt;h1&gt;, denna brukar vara
        placerad högt upp på sidan och ska vara förklarande av sidans innehåll.
        Det är inte bara viktigt för sidans tillgänglighet att en headning är
        informativ utan även för att ge sidan ett bra SEO.
      </p>
      <p>
        Nivåerna är mellan 1 till 6. Precis som i en tidning finns det en
        överrubrik, underrubriker, brödtext och så vidare. Dessa finns för att
        ge användaren en förståelse över vad varje sektion innehåller. En
        headning används inte för att göra texten större eller stå ut på sidan.
        Headings ska användas efter sin nivå och ska utseendet ändras görs det
        med css.
      </p>
      <p>
        För att ge användare som använder skärmläsare bästa förutsättningarna
        att använda hemsidan ska nivåerna användas i sin hierarki, 1 till 6 och
        inte hoppa över någon nivå. Enligt WCAG 2 är det inte fel att använda
        sig av flera &lt;h1&gt; för att uppnå kriterierna för AA nivån, standard
        för webben. Men det gör det svårare för en användare med skärmläsare att
        ta till sig innehållet av sidan och drar ner sidans SEO. Användare med
        skärmläsare kan använda kortkommandon för att ta sig mellan headnings
        vilket även det påverkas negativt om dessa ej är i ordning. Gällande
        styling är det tillfördel att inte skriva i enbart versaler då detta kan
        göra det svårlästa för exempelvis dyslektiker.
      </p>
      <p>
        Idag används en hel del ramverk och i dessa byggs komponenter för
        hemsidan. De bestå bland annat av headnings, dessa ska hålla sig till
        sidans struktur vid uppbyggnad av nivåerna av headnings. Sidans logga är
        troligtvis inte en heading och ska inte inte heller styles som en.
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.a11yproject.com/posts/how-to-accessible-heading-structure/">
          https://www.a11yproject.com/posts/how-to-accessible-heading-structure/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">
          https://www.w3.org/WAI/tutorials/page-structure/headings/
        </a>
      </p>
    </>
  );
}
