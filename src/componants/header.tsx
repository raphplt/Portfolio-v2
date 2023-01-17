import styles from "../styles/header.module.css";
import logo from "../../public/assets/medias/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import hamb from "../../public/assets/medias/hamburger.png";

export default function Header() {
  const buttonHandler = () => {
    const change: any = document.getElementById("right");
    if (change.style.display === "unset") {
      change.style.display = "none";
    } else {
      change.style.display = "unset";
    }
  };

  return (
    <div className={styles.main} id="main">
      <div className={styles.left}>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={75}
            height={75}
            className={styles.logo}
          />
        </Link>
        <Image
          src={hamb}
          alt="Logo"
          width={75}
          height={75}
          className={styles.hambImg}
          onClick={buttonHandler}
        />
      </div>
      <div className={styles.right} id="right">
        <a href={"#quiSuisJe"}>
          <div className={styles.child}>Qui-suis-je ?</div>
        </a>
        <a href={"#projets"}>
          <div className={styles.child}>Projets</div>
        </a>
        <a href={"#competences"}>
          <div className={styles.child}>Compétences</div>
        </a>
        <a href="#contact">
          <div className={styles.child}>Contact</div>
        </a>
      </div>
    </div>
  );
}
