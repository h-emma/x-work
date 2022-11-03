import styles from "./Footer.module.sass";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.backgrund}>
        <div className={styles.logoContainer}>
          <Link href="/" className={"non-highlighted-text"}>
            <Image
              src="/assets/icons/logo.svg"
              alt="Tillgänglighetskollen,tillbaka till hem"
              width={75}
              height={75}
            />
          </Link>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.pageLinkContainer}>
            <ul>
              <li>
                <Link href="/" className={styles.textLink}>
                  Hem
                </Link>
              </li>
              <li>
                <Link href="om-oss" className={styles.textLink}>
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="om-tillganglighet" className={styles.textLink}>
                  Om tillgänglighet
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
                  0707-345678
                </a>
              </p>
            </div>
            <div className={styles.socialContainer}>
              <a
                href="https://sv-se.facebook.com/"
                className="social-media-link"
              >
                <Image
                  className={styles.socialImage}
                  src="/assets/icons/icon_facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                className="social-media-link"
              >
                <Image
                  className={styles.socialImage}
                  src="/assets/icons/icon_instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
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
