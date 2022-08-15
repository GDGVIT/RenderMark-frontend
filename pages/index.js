import styles from "../styles/Home.module.css";
import browserImage from "../assets/browser.svg";
import mobileImage from "../assets/mobile.svg";
import Image from "next/image";
import Button from "../components/Button/Button";
import { useRouter } from "next/router";
import Head from "next/head";
// import Link from 'next/link'
import logo from "../public/logo.svg";
export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Render Mark</title>
        <meta
          name="description"
          content="Create your promo videos with just a markdown"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles["browser-image"]}>
            <Image
              alt="Browser Window"
              src={browserImage}
              layout="fixed"
              width={700}
              height={600}
            />
          </div>
          <div className={styles["mobile-image"]}>
            <Image
              alt="Browser Window"
              src={mobileImage}
              layout="fixed"
              width={300}
              height={600}
            />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles["content-text"]}>
            <Image src={logo} width={500} height={120} />

            <p>CREATE PROMO VIDEOS WITH JUST A MARKDOWN</p>
          </div>
          <Button
            onClick={() => {
              router.push("/templates");
            }}
            style={{
              background: `linear-gradient(
                120.89deg,
                rgba(200, 100, 251, 1) 5.96%,
                rgba(230, 30, 230, 1) 50.72%
            )`,
              boxShadow: `0px 1px 4px rgba(11, 55, 0, 0.27),
            inset 0px 4px 5px rgba(255, 255, 255, 0.16)`,

              borderRadius: "5px",
              border: "none",
              fontSize: "2rem",
              padding: "10px 15px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
