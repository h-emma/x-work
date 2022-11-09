import styles from "../../ItemCard/ItemCard.module.sass";
export default function ImageItemText() {
  return (
    <>
      <p>
        Hemsidor betår av en del bilder, en del för information, en del för
        funktion och andra är dekorativa. Det de har gemensamt är att kunna vara
        tillgängliga för användare som använder skärmläsare eller inte kan ladda
        bilderna är att de behöver en alternativ text, ett så kallad alt
        attribut.
      </p>
      <p>
        Bilder som är till för att vara informativa behöver en alternativ text
        som är beskrivande av bildens innehåll. En bild som används som länk
        eller knapp behöver en alternativ text som beskriver dess
        funktionalitet. Samt om bilden är till för dekoration ska den
        alternativa texten vara tom då dess syfte enbart är visuellt. Om det
        finns en osäkerhet vilken typ av bild det är går den att testa på W3 i
        deras{""}
        <a href="https://www.w3.org/WAI/tutorials/images/decision-tree/">
          alt Decision Tree
        </a>
        .
      </p>
      <p>
        Att använda text i en bild ska undvikas i den mån det går. Om det dock
        behövs ska texten skrivas i den alternativa texten.
      </p>
      <p>
        För att testa hur tillgänglig ens alternativa text är kan man ta bort
        bilden för att undersöka om dess information eller funktionalitet är
        begripligt. Bilder eller grafiska former ska vara i syfte att tydliggöra
        innehållet för användaren, inte det motsatta.
      </p>

      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/WAI/tutorials/images/">
          https://www.w3.org/WAI/tutorials/images/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">
          https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
        </a>
      </p>
    </>
  );
}
