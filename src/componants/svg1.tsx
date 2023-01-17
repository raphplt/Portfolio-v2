import styles from "../styles/svg.module.css";

export default function Svg1() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg1}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stop-color="rgba(0, 0, 0, 1)"
            offset="0%"
            data-darkreader-inline-stopcolor=""
          ></stop>
          <stop
            id="stop2"
            stop-color="rgba(11.607, 77.737, 255, 1)"
            offset="100%"
            data-darkreader-inline-stopcolor=""
          ></stop>
        </linearGradient>
      </defs>{" "}
      <path
        fill="url(#sw-gradient)"
        d="M25.8,-30.7C34,-24,41.4,-16.3,43.6,-7.1C45.9,2,43,12.6,37.2,20.3C31.3,27.9,22.5,32.7,13,36.4C3.6,40.1,-6.5,42.8,-14.8,40C-23,37.2,-29.5,29,-34.1,20.1C-38.7,11.2,-41.5,1.7,-39.1,-6.1C-36.7,-13.8,-29.2,-19.8,-21.8,-26.7C-14.5,-33.6,-7.2,-41.3,0.8,-42.2C8.8,-43.2,17.7,-37.4,25.8,-30.7Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        stroke="url(#sw-gradient)"
      ></path>{" "}
    </svg>
  );
}
