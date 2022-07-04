import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Review.module.css";

const ReviewsPage = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Отзывы наших клиентов</title>
        <meta name="title" content="Все отзывы" />
      </Head>
      <h1>Отзывы наших клиентов</h1>
      <div className={styles.container}>
        <Image src="/puff.png" alt="Avatar" width={100} height={100} />
        <p>
          <span>Миссис Пафф</span> Учитель вождения
        </p>
        <p>
          Великопленые бургеры. Захожу кушать 3 раза в день, очень довольна.
        </p>
      </div>

      <div className={styles.container}>
        <Image src="/plankton.jpeg" alt="Avatar" width={100} height={100} />
        <p>
          <span>Шелдон Планктон</span> Бизнесмен
        </p>
        <p>
          Не понимаю почему это считают вкусным. На мой взгляд переоценено.
        </p>
      </div>
    </>
  );
};

export default ReviewsPage;
