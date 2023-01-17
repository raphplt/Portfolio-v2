import styles from "../styles/project.module.css";
import Image from "next/image";
import Svg5 from "./svg5";
import Svg6 from "./svg6";

export default function Project(props: any) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.devices}>
        <Image
          loader={() => `${props.imgPC}`}
          src={`${props.imgPC}`}
          alt="The website shown in PC format"
          className={styles.devicePC}
          width={200}
          height={200}
        />
        <div className={styles.devicesChild}>
          <Image
            loader={() => `${props.imgTab}`}
            src={`${props.imgTab}`}
            alt="The website shown in tablet format"
            className={styles.deviceTab}
            width={20}
            height={20}
          />
          <Image
            loader={() => `${props.imgPhone}`}
            src={`${props.imgPhone}`}
            alt="The website shown in phone format"
            className={styles.devicePhone}
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className={styles.projectInfos}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
