import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Burger.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://62c33b22ff594c65677068ff.mockapi.io/burgers");
  const data = await res.json();

  return {
    props: { burgers: data },
  };
};

const Burgers = ({ burgers }) => {
  return (
    <div>
      <h1>Наши бургеры</h1>
     
        {burgers.map((burger) => {
          return (
            <Link href={`/burgers/${burger.id}`} key={burger.id}>
              <a className={styles.burgerCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={`${burger.image}`}
                    alt={`${burger.name}`}
                    width="100%"
                    height="120%"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3>{burger.name}</h3>
                  <p>{burger.desc}</p>
                  <p>
                    <b>{burger.price} руб</b>
                  </p>
                </div>
              </a>
            </Link>
          );
        })}
     
    </div>
  );
};

export default Burgers;
