import styles from "../styles/skill.module.css";
import Image from "next/image";

export default function Skill(props: any) {
  return (
    <div className={styles.competencesChild}>
      <h2>{props.title}</h2>
      <div className={styles.competencesSubMenu}>
        <div className={styles.skill}>
          <div className={styles.skillInfo}>
            <h3>{props.skill1}</h3>
            <span>{props.skillLvl1}</span>
          </div>
          <Image
            loader={() => `${props.img1}`}
            src={`${props.img1}`}
            alt="A logo of the skill"
            width={150}
            height={150}
            className={styles.skillImg}
          />
        </div>
        <div className={styles.skill}>
          <div className={styles.skillInfo}>
            <h3>{props.skill2}</h3>
            <span>{props.skillLvl2}</span>
          </div>
          <Image
            loader={() => `${props.img2}`}
            src={`${props.img2}`}
            alt="A logo of the skill"
            width={150}
            height={150}
            className={styles.skillImg}
          />
        </div>
        <div className={styles.skill}>
          <div className={styles.skillInfo}>
            <h3>{props.skill3}</h3>
            <span>{props.skillLvl3}</span>
          </div>
          <Image
            loader={() => `${props.img3}`}
            src={`${props.img3}`}
            alt="A logo of the skill"
            width={150}
            height={150}
            className={styles.skillImg}
          />
        </div>
        {props.skill4 && (
          <div className={styles.skill}>
            <div className={styles.skillInfo}>
              <h3>{props.skill4}</h3>
              <span>{props.skillLvl4}</span>
            </div>
            <Image
              loader={() => `${props.img4}`}
              src={`${props.img4}`}
              alt="A logo of the skill"
              width={150}
              height={150}
              className={styles.skillImg}
            />
          </div>
        )}
        {props.skill5 && (
          <div className={styles.skill}>
            <div className={styles.skillInfo}>
              <h3>{props.skill5}</h3>
              <span>{props.skillLvl5}</span>
            </div>
            <Image
              loader={() => `${props.img5}`}
              src={`${props.img5}`}
              alt="A logo of the skill"
              width={150}
              height={150}
              className={styles.skillImg}
            />
          </div>
        )}
      </div>
    </div>
  );
}
