import styles from "../../ItemCard/ItemCard.module.sass";
export default function ColorContrastItemText() {
  return (
    <>
      <p>
        Färg kontrast är en stor del av att tillgängliggöra en hemsida. För att
        underlätta läsningen för användare med tillexempel färgblindhet är det
        viktigt att färgen på texten och dess bakgrund har en så bra kontrast
        som möjligt. Enligt WCAG 2.0 är en bra kontrast på brödtext en ratio på
        minst 4.5:1 för att uppnå nivå AA och 4:1 för att uppnå nivå AAA. För
        test som har 18.5px och är bold samt 24px och större är kvarnen på nivå
        AA 3.1 i kontrast och för AAA 4:5.1. Dessa riktlinjer gäller inte
        dekorativa texter och logotyper. Gällande färg kontraster på delar som
        inte är text så som formulär behöver ration vara mellan 3 till 1.
      </p>
      <p>
        På webben finns det en del verktyg som underlättar testning av färg
        kontraster och deras ratio. Ett sådan verktyg är WebAIM’s{""}
        <a href="https://webaim.org/resources/contrastchecker/">
          Color Contrast Checker
        </a>
        .
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://webaim.org/resources/contrastchecker/">
          https://webaim.org/resources/contrastchecker/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href=" https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">
          https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast">
          https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
        </a>
      </p>
    </>
  );
}
