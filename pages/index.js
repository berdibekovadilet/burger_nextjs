import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Главная</h1>
      <Link href="/burgers">
        <a>Бургеры</a>
      </Link>
    </div>
  );
}
