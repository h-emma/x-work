import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/AboutAccessibility.module.sass";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function AboutUs() {
  useEffect(() => {
    document.body.style.position = "relative";
  }, []);

  return (
    <>
      <Head>
        <title>Tillgänglighetskollen | Om oss</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Navbar backgroundColor="#FFC0C0" pageIndex={1}></Navbar>
      <main className={styles.main}>
        <h1>Om oss</h1>

        <p>
          Denna sida är skapad av två studerande, Albin och Emma, på
          webbutvecklarutbildningen på Yrgo i Göteborg HT2022. Hemsidan är en
          del utav vårt examensarbete. Vårt mål med hemsidan är att bidra med
          kunskap som underlättar för andra utvecklare att skapa en mer
          tillgänglig webb, en webb för alla!
        </p>
        <p>
          Under projektperiodens sex veckor har vi lärt oss en hel del om
          tillgänglighet på webben. Det som vi tar med oss mest är att en vision
          på 100% tillgänglighet är orimligt och att även Goodenough kan leda
          till ett Nobelpris.
        </p>
        <div className={styles.emptySpace}></div>
      </main>
      <Footer></Footer>
    </>
  );
}
