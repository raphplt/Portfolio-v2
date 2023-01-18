import styles from "../styles/card.module.css";
import Image from "next/image";
import mg from "../medias/mg.png";

export default function Card(props: any) {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
      <div className={styles.right}>
        <Image
          loader={() => `${props.img}`}
          src={`${props.img}`}
          alt="A picture of me"
          width={150}
          height={150}
          className={styles.cardImage}
        />
      </div>
    </div>
  );
}
