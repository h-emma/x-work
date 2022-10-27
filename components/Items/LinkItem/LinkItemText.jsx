export default function LinkItemText() {
  return (
    <>
      <p>
        Om man har en mailklient lokalt på datorn så kommer denna att öppnas.
        Men om man använder sig av en webbaserad klient fungerar den som en
        vanlig länk och sidan öppnas i webbläsaren i samma fönster.
      </p>
      <p>
        För att undvika att leda bort användaren från hemsidan kan man lägga
        till ‘target="_blank”‘. Då öppnar webbläsaren en ny flik.
      </p>
      <p>
        Användare gillar inte att bli överraskade så ett bra komplement kan vara
        att skriva ut mailadressen i länken.
      </p>
      <p>
        Huruvida en länk bör öppnas i ett nytt fönster/flik är ett omtalat ämne
        men i slutänden handlar det om att låta användaren avgöra och göra det
        den är van vid. Samtidigt är det fördelaktigt om länken öppnas i ett
        nytt fönster/flik men informera då användaren att det är det som kommer
        att hända, t.ex. med “Öppna i en ny flik för att läsa mer”.
      </p>
      <p>
        Länktexter ska vara meningsfulla i sin egna kontext. Så undvik att
        skriva ut generiska uppmaningar som “Klicka här!”
      </p>
      <p>
        Att använda underlinje på länkar är vedertaget och underlättar för
        användaren att förstå att det är en länk.
      </p>
      <p>
        När en ikon används som länk är den viktig att tydliggöra för en
        skärmläsare vad ikonen föreställer samt vart användaren blir omdirigerad
        när den klickar. Detta går att göra med antingen t.ex. “Instagram” som
        text, bädda in en bild i länken med en alt-text eller använda en
        aria-label i länken.
      </p>
    </>
  );
}
