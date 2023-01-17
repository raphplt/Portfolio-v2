import styles from "../styles/svg.module.css";

export default function Svg5() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg5}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stop-color="rgba(248, 117, 55, 1)"
            offset="0%"
            data-darkreader-inline-stopcolor=""
          ></stop>
          <stop
            id="stop2"
            stop-color="rgba(38.297, 31, 251, 1)"
            offset="100%"
            data-darkreader-inline-stopcolor=""
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M25.1,-31.7C30.1,-25.7,30.2,-15.5,30.9,-6.3C31.5,3,32.7,11.3,30.1,18.9C27.5,26.5,21.1,33.4,12.8,37.6C4.4,41.7,-5.8,43,-12.6,38.7C-19.4,34.5,-22.7,24.7,-27.7,16C-32.7,7.3,-39.5,-0.5,-38.6,-7C-37.8,-13.6,-29.2,-19.1,-21.5,-24.7C-13.8,-30.3,-6.9,-36.1,1.6,-37.9C10,-39.8,20,-37.8,25.1,-31.7Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
      ></path>
    </svg>
  );
}
