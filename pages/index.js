import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Красти Крабсбургеры | Главная</title>
        <meta name="title" content="Жирные бургеры" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Главная</h1>
        <div className={styles.mainImage}>
          <Image
            src="/Krabby_Patty.webp"
            alt="Krabby burger"
            className={styles.img}
            width={400}
            height={250}
          />
        </div>
        <p className={styles.text}>
          Что такое идеальный бургер? Лист свежего салата, мягкие булочки,
          сочное мясо. Приправим все это секретным ингредиентом. И вуаля, наш идеальный бургер готов, самое
          любимое блюдо среди жителей Бикини Боттом.
        </p>
        <p className={styles.text}>
          Попробуйте нашу новинку, крабсбургер, покрытая вареньем из медуз.
          Варенье придает крабсбургеру удивительно приятный вкус.
        </p>
        <Link href="/burgers">
          <a className={styles.btn}>Бургеры</a>
        </Link>
      </div>
    </>
  );
}
