import styles from "../../ItemCard/ItemCard.module.sass";
export default function AnimationItemText() {
  return (
    <>
      <p>
        Rörligt innehåll på en hemsida kan vara ett viktigt element för att skapa olika sorters känslor för besökaren.
        Det kan även användas för att visa information samt tydliggöra övergångar mellan olika delar av en hemsida.
        Beroende på vad en hemsida försöker uppnå samt hur information visas kan det vara svårt att dra alltför exakta
        regler för vad som blir tillgängligt för olika användare. Men det är bra att ha i åtanke att rörelse som
        uppfattas tillgängligt för en användare, kan kännas distraherande och överväldigande för en annan.
      </p>
      <p>Nedan följer generella regler för rörligt innehåll.</p>

      <h4>Play Stop Paus</h4>
      <p>
        Enligt WCAG 2.1 ska all information som på något sätt rör sig, blinkar eller scrollar kunna stängas av, döljas
        eller pausas. Detta gäller dock bara om allt av det följande är sant:
      </p>
      <ul style={{ listStyle: "square", paddingLeft: "16px" }}>
        <li>Att det som rör sig startar automatiskt.</li>
        <li>Att det håller på längre än 5 sekunder.</li>
        <li>Att det presenteras tillsammans med annat innehåll på sidan.</li>
      </ul>
      <p>
        Det finns också regler att följa gällande blinkande innehåll, där en gräns på tre blinkningar per sekund inte
        ska överskridas, då de kan framkalla epileptiska anfall hos en del användare.
      </p>
      <p>Dessa regler gäller för allt rörligt innehåll, såsom CSS-animationer, GIF-bilder och video-innehåll.</p>
      <p>
        Tänk på att text som rör sig kan vara svårt att ta till sig om man som användare behöver tid på sig för att
        läsa.
      </p>
      <h4>Prefers reduced motion</h4>
      <p>
        Precis som man kan använda en @media-query för att göra ändringar i css beroende på till exempel skärmstorlek,
        kan man även göra en alternativ css-layout beroende på om användaren använder sig av inställningen “prefers
        reduced motion.” Detta ställs vanligtvis in direkt i användarens operativsystem. Då kan man som programmerare
        välja att till exempel stänga av eller tona ner animationer som inte är direkt nödvändiga för sidans innehåll.
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html">
          https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions">
          https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion">
          https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
        </a>
      </p>
    </>
  );
}
