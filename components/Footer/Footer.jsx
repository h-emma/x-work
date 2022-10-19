import styles from "./Footer.module.sass";
import Link from "next/link";
import Image from "next/future/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.backgrund}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="Loga,tillbaka till startsidan"
              width={86}
              height={81}
            />
          </Link>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.pageLinkContainer}>
            <ul>
              <li>
                <Link href="/">
                  <a>Hem</a>
                </Link>
              </li>
              <li>
                <Link href="om-oss">
                  <a>Om oss</a>
                </Link>
              </li>
              <li>
                <Link href="om-tillgänglighet">
                  <a>Om tillgänglighet</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.contactAndSocialContainer}>
            <div className={styles.contactContainer}>
              <p className={styles.text}>
                Skicka ett mail till oss,
                <a
                  className={styles.link}
                  href="mailto:test@test.com"
                  target="blank"
                >
                  {" "}
                  test@test.com
                </a>
              </p>
              <p className={styles.text}>
                Eller kontakta oss på,
                <a className={styles.link} href="tel:+46707345678">
                  {" "}
                  0707 345678
                </a>
              </p>
            </div>
            <div className={styles.socialContainer}>
              <div className={styles.socialIcon}>
                <a href="https://sv-se.facebook.com/">
                  <Image
                    src="/assets/icons/icon_facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className={styles.socialIcon}>
                <a href="https://www.instagram.com/">
                  <Image
                    src="/assets/icons/icon_instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p className={styles.textCopyRight}>
            {" "}
            &copy; {new Date().getFullYear()} X-Work - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
