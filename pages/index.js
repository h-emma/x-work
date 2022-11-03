import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import ButtonItem from "../components/Items/ButtonItem/ButtonItem";
import styles from "../styles/Home.module.sass";
import StartSection from "../components/StartSection/StartSection";
import LogoBG from "../public/assets/images/logo-bg.svg";
import LinkItem from "../components/Items/LinkItem/LinkItem";
import { useEffect, useRef } from "react";
import DropdownItem from "../components/Items/DropdownItem/DropdownItem";

export default function Home() {
  const itemList = useRef(null);

  return (
    <>
      <Head>
        <title>Tillgänglighetskollen</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar></Navbar>

      <main className={styles.main}>
        <section className={styles.startSectionContainer}>
          <StartSection ref={itemList} />
          <Image src={LogoBG} alt={""} className={styles.logoBG} loading="eager" priority={true}></Image>
        </section>

        <div className={styles.itemsHeaderContainer}>
          <h2>Komponenter</h2>
        </div>
        <section className={styles.itemsSection}>
          <LinkItem itemList={itemList} />
          <DropdownItem itemList={itemList} />
          <ButtonItem itemList={itemList} />
        </section>
      </main>

      <Footer></Footer>
      <ScrollToTopButton itemList={itemList}></ScrollToTopButton>
    </>
  );
}
