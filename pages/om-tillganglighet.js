import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function AboutAccessibility() {
  return (
    <div>
      <Head>
        <title>Tillgänglighetskollen | Om tillgänglighet</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Navbar></Navbar>
        <h1>Hej</h1>
      </main>
      <Footer></Footer>
    </div>
  );
}
