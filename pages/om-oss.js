import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function AboutUs() {
  useEffect(() => {
    document.body.style.position = "relative";
  }, []);

  return (
    <div>
      <Head>
        <title>Tillgänglighetskollen | Om oss</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Navbar backgroundColor="#FFC0C0" pageIndex={1}></Navbar>
      <main>
        <h1>Hej</h1>
      </main>
      <Footer></Footer>
    </div>
  );
}
