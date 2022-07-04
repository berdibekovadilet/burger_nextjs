import Image from "next/image";
import styles from "../../styles/Burger.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://62c33b22ff594c65677068ff.mockapi.io/burgers");
  const data = await res.json();

  const paths = data.map((burger) => {
    return {
      params: { id: burger.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://62c33b22ff594c65677068ff.mockapi.io/burgers/${id}`);
  const data = await res.json();

  return {
    props: { burger: data },
  };
};

const Details = ({ burger }) => {
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
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
        <p>{burger.desc}</p>
        <p>
          <b>{burger.price} руб</b>
        </p>
      </div>
    </div>
  );
};

export default Details;
