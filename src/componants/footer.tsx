/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link";
import styles from "../styles/footer.module.css";
import Wave4 from "./svgWaves4";

export default function Footer() {
  return (
    <div className={styles.main}>
      <Wave4 />

      <div className={styles.box}>
        <div className={styles.child}>
          <h2>Pages</h2>
          <h3>
            <Link href={"#quiSuisJe"}> Qui-suis-je ?</Link>
          </h3>
          <h3>
            <Link href={"#projets"}> Projets</Link>
          </h3>
          <h3>
            <Link href={"#competences"}> Compétences</Link>
          </h3>
          <h3>
            <Link href={"#contact"}>Contacts</Link>
          </h3>
        </div>
        <div className={styles.child}>
          <h2>Contact</h2>
          <h3>
            <a href="mailto:plassa_r@etna-alternance.net">Email</a>
          </h3>
          <h3>
            <a
              href="https://www.linkedin.com/in/raphaël-plassart-652304253/"
              target={"_blank"}
            >
              LinkedIn
            </a>
          </h3>
          <h3>
            <a href="https://github.com/raphplt" target={"_blank"}>
              Github
            </a>
          </h3>
          <h3>
            <a href="https://www.instagram.com/raphael_plt_/" target={"_blank"}>
              Instagram
            </a>
          </h3>
        </div>
        <div className={styles.child}>
          <h2>Aide</h2>
          <h3>
            <a
              href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
              target={"_blank"}
            >
              RGPD
            </a>
          </h3>
          <h3>Mentions Légales</h3>
          <h3>Plan du site</h3>
        </div>
      </div>
    </div>
  );
}
