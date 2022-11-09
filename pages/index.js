import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ButtonItem from "../components/Items/ButtonItem/ButtonItem";
import styles from "../styles/Home.module.sass";
import StartSection from "../components/StartSection/StartSection";
import LogoBG from "../public/assets/images/logo-bg.svg";
import LinkItem from "../components/Items/LinkItem/LinkItem";
import { useEffect, useRef } from "react";
import DropdownItem from "../components/Items/DropdownItem/DropdownItem";
import HeadingItem from "../components/Items/HeadingItem/HeadingItem";
import ParagraphItem from "../components/Items/ParagraphItem/ParagraphItem";
import ColorContrastItem from "../components/Items/ColorContrastItem/ColorContrastItem";
import LinkIconItem from "../components/Items/LinkIconItem/LinkIconItem";
import LinkMailToItem from "../components/Items/LinkMailToItem/LinkMailToItem";
import FormItem from "../components/Items/FormItem/FormItem";
import AnimationItem from "../components/Items/AnimationItem/AnimationItem";
import ImageItem from "../components/Items/ImageItem/ImageItem";

export default function Home() {
  const itemList = useRef(null);

  useEffect(() => {
    document.body.style.position = "relative";
  }, []);

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
          <Image
            src={LogoBG}
            alt={""}
            className={styles.logoBG}
            loading="eager"
            priority={true}
          ></Image>
        </section>

        <div className={styles.itemsHeaderContainer}>
          <h2>Komponenter</h2>
        </div>
        <section className={styles.itemsSection}>
          <AnimationItem itemList={itemList} />
          <ButtonItem itemList={itemList} />
          <ColorContrastItem itemList={itemList} />
          <DropdownItem itemList={itemList} />
          <FormItem itemList={itemList} />
          <HeadingItem itemList={itemList} />
          <ImageItem itemList={itemList} />
          <LinkItem itemList={itemList} />
          <LinkIconItem itemList={itemList} />
          <LinkMailToItem itemList={itemList} />
          <ParagraphItem itemList={itemList} />
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}
