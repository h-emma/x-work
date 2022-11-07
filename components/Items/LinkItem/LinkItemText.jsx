export default function LinkItemText() {
  return (
    <>
      <h4>Allmänt om länkar</h4>
      <p>
        När man använder länkar &lt;a&gt;&lt;/a&gt; på en hemsida behöver dessa
        se ut och fungera på ett visst sätt för att göra hemsidan tillgänglig
        för användaren. Länkar behöver vara synliga och ett vedertaget sätt att
        göra det på är att ge dem en underlinje. I vissa fall har de även en
        annan färg än resterande text. Det är dock inget man ska förlita sig på
        då det inte alltid är tydligt för användaren. Det är även tillfördel att
        länktexten i sig är meningsfulla i sin egna kontext. Med det menas att
        uppmaningar som, &quot;klicka här&quot;eller &quot;läs mer&quot; ska
        undvikas. Sammanhanget av länken avgör även om det ska vara en del av
        brödtexten eller vara utanför. Det finns dock undantag till denna typ av
        styling och det är i tillexempel i en meny där det är vedertaget att
        dessa är länkar, dessa brukar dock ha en meningsfull kontext. Dessa
        tydliggörs med pseudoklasser och går att läsa mer om längre ner på
        sidan.
      </p>
      <a href="https://webbriktlinjer.se/riktlinjer/5-skriv-tydliga-lankar/">
        Källa
      </a>
      <a href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context">
        Källa
      </a>
      <p>
        Länkar öppnas i standard i samma fönster. Det är något som är
        omdiskuterat huruvida det ska vara så eller inte. Att låta användare
        själv bestämma är fördelaktigt och använda sig av det standardiserade
        beteendet då användaren vet vad som händer. Det kan vara tillfördel att
        låta länken öppnas i ett nytt fönster med hjälp av
        target=&quot;_blank&quot;. Användaren ska dock inte behöva bli
        överraskad därav kan det vara bra att skriva i länktexten att den kommer
        öppnas i en ny flik.
      </p>
      <a href="https://www.a11y-collective.com/the-perfect-link/">Källa</a>
      <h4>Mail länk</h4>
      <p>
        Många hemsidor har någonstans på sin sida en länk till sin mail och
        dessa kan se olika ut. När det gäller tillgänglighet finns det några
        saker att tänka på.
      </p>
      <p>
        &lt;a
        href=&quot;mailto:en-mail-adress@mail.com&quot;&gt;Adressen&lt;/a&gt; Så
        ser koden ut för att länka till en mailadress. Om användaren har en
        mailklient lokalt på datorn exempelvis Apple Mail på Mac eller Outlook
        öppnas en sådan länk där. Använder användaren istället en webbaserad
        klient kommer länken öppnas i webbläsaren som en vanlig länk. Som nämt
        innan i stycket om allmänt om länkar öppnas även denna länk
        standardiserat i samma fönster. Det kan vara till fördel att skicka ut
        mailadressen och inte enbart ”Maila till oss”. Detta då det ger
        användare möjlighet att kopiera mailadressen och göra det på en annan
        device eller vid ett senare tillfälle.
      </p>
      <a href="https://css-tricks.com/all-about-mailto-links/">Källa</a>
      <a href="https://www.a11y-collective.com/the-perfect-link/">Källa</a>
      <h4>Ikon som länk</h4>
      <p>
        Iconer som länkar använts flitigt tillexempel för Instagram och
        Facebook. För användare med skärmläsare behöver dessa tydliggöras, både
        vad det föreställer men också vart personen blir omdirigerad till. Sätt
        att göra det på är att länga till texten Instagram till ikonen, låta
        ikonen vara en &lt;img&gt; och lägga till en alt=&quot;&quot; eller en
        aria-label=&quot;&quot;.
      </p>
      <a href="https://www.a11y-collective.com/the-perfect-link/">Källa</a>
    </>
  );
}
