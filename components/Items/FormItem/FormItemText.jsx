import styles from "../../ItemCard/ItemCard.module.sass";

export default function LinkItemText() {
  return (
    <>
      <p>
        Ett formelement används varje gång en användare behöver fylla i någon
        sorts användardata på en hemsida. Vanliga användningsområden är när en
        användare ska logga in eller registrera sig, men det kan även handla om
        annan data än användaruppgifter. Oftas skickas denna datan till en
        server för vidare bearbetning.
      </p>
      <p>
        Formelementet i sig är en behållare som kan innehålla olika
        inputelement, såsom textfält, checkboxar, toggles och andra sätt som en
        användare kan göra val och mata in data.
      </p>
      <h4>Validering</h4>
      <p>
        Inte sällan finns det restriktioner på vad för data som får matas in
        eller inte, samt om det saknas data som är viktig för hemsidan att ha.
        Till exempel att ett inmatningsfält är tvungen att vara en e-mailadress,
        eller att ett lösenord måste innehålla en viss sorts tecken eller ha en
        viss längd. Detta kallas validering.
      </p>
      <h4>Tillgänglighet</h4>
      <p>
        För att en form ska vara så tillgänglig som möjligt finns det några
        saker man bör tänka på:
      </p>

      <p>
        Ett inputelement ska alltid vara kopplat till ett labelelement för att
        tydligt visa vilken sorts data som förväntas av användaren. Detta är
        viktigt både visuellt och för en skärmläsare. Ibland används även en så
        kallad “placeholder”-text inuti ett textfält för att visa användare ett
        exempel på data som ska matas in. Detta kan man ha, men då vissa
        skärmläsare inte läser av dessa, är det fortfarande viktigt att använda
        labels.
      </p>
      <p>
        Alla inputelement måste vara manövrerbara och kunna interagera med
        tangentbordet.
      </p>
      <p>
        Använd ett fieldsetelement för att gruppera olika inputelement som hör
        samman. Fieldsetelementet ska innehålla ett legendelement som fungerar
        som en slags heading för fieldsetelementet som även den övergripande
        beskriver vad som förväntas av användaren att fylla i.
      </p>
      <p>
        Om din form använder sig av validering av datan, ska det alltid finnas
        tydliga felmeddelanden om vad som gått fel, skulle användaren mata in
        saker på fel sätt. I html5 finns numera frontendvalidering inbyggt och
        man kan definiera dessa i inputelementen när man skapar sidan. Det är
        dock upp till webbläsaren att implementera själva felmeddelandena,
        vilket gör att olika webbläsare och olika enheter är olika bra på att
        visa användaren vad som gick fel. Om tid och möjlighet finns kan det
        fortfarande vara lämpligt att komplettera den inbyggda valideringen med
        egenbyggda felmeddelanden.
      </p>
      <p>
        Ett felmeddelande ska heller aldrig förlita sig på färg för att visa att
        det är ett felmeddelande, då varken skärmläsare eller användare med
        nedsatt färgseende kommer uppfatta detta.
      </p>
      <p>
        Förutom felmeddelanden är det också viktigt att tydligt visa användaren
        när saker går som förväntat. Som till exempel återkoppling på att data
        har blivit mottaget av hemsidan.
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3schools.com/html/html_forms.asp">
          https://www.w3schools.com/html/html_forms.asp
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset">
          https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/WAI/tutorials/forms/">
          https://www.w3.org/WAI/tutorials/forms/
        </a>
      </p>
    </>
  );
}
