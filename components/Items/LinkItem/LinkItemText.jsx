import styles from "../../ItemCard/ItemCard.module.sass";

export default function LinkItemText() {
  return (
    <>
      <p>
        När man använder länkar &lt;a&gt;&lt;/a&gt; på en hemsida behöver dessa
        se ut och fungera på ett visst sätt för att göra hemsidan tillgänglig
        för användaren. Länkar behöver vara synliga och ett vedertaget sätt att
        göra det på är att ge dem en underlinje. I vissa fall har de även en
        annan färg än resterande text. Det är dock inget man ska förlita sig på
        då det inte alltid är tydligt för användaren. Det är även till fördel
        att länktexten i sig är meningsfulla i sin egna kontext. Med det menas
        att uppmaningar som, &quot;klicka här&quot; eller &quot;läs mer&quot;
        ska undvikas. Sammanhanget av länken avgör även om det ska vara en del
        av brödtexten eller vara utanför. Det finns dock undantag till denna typ
        av styling och det är i till exempel i en meny där det är vedertaget att
        dessa är länkar, dessa brukar dock ha en meningsfull kontext. Dessa
        tydliggörs med<a href="#pseudo-class-item">pseudoklasser</a>och går att
        läsa mer om längre ner på sidan.
      </p>

      <p>
        Länkar öppnas i standard i samma fönster. Det är något som är
        omdiskuterat huruvida det ska vara så eller inte. Att låta användare
        själv bestämma är fördelaktigt och använda sig av det standardiserade
        beteendet då användaren vet vad som händer. Det kan vara till fördel att
        låta länken öppnas i ett nytt fönster med hjälp av
        target=&quot;_blank&quot;. Användaren ska dock inte behöva bli
        överraskad därav kan det vara bra att skriva i länktexten att den kommer
        öppnas i en ny flik.
      </p>

      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://webbriktlinjer.se/riktlinjer/5-skriv-tydliga-lankar/">
          https://webbriktlinjer.se/riktlinjer/5-skriv-tydliga-lankar/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context/">
          https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context/
        </a>
      </p>
      <p className={styles.sourceParagraph}>
        Källa:{""}
        <a href="https://www.a11y-collective.com/the-perfect-link/">
          https://www.a11y-collective.com/the-perfect-link/
        </a>
      </p>
    </>
  );
}
