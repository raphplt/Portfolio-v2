import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.child}>
          <h2>Pages</h2>
          <h3>Qui-suis-je ?</h3>
          <h3>Projets</h3>
          <h3>Compétences</h3>
          <h3>Contacts</h3>
        </div>
        <div className={styles.child}>
          <h2>Contact</h2>
          <h3>Email</h3>
          <h3>LinkedIn</h3>
          <h3>Github</h3>
        </div>
        <div className={styles.child}>
          <h2>Aide</h2>
          <h3>RGPD</h3>
          <h3>Mentions Légales</h3>
          <h3>Plan du site</h3>
        </div>
      </div>
    </div>
  );
}
