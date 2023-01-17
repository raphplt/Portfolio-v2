import styles from "../styles/svg.module.css";

export default function Svg3() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg3}
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
            stop-color="rgba(60.286, 0, 255, 1)"
            offset="100%"
            data-darkreader-inline-stopcolor=""
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M14,-12.6C19.7,-8.3,27,-4.2,30.4,3.4C33.8,11.1,33.5,22.1,27.8,28.6C22.1,35.1,11.1,37,1.4,35.6C-8.2,34.1,-16.3,29.3,-23.2,22.8C-30,16.3,-35.6,8.2,-36.3,-0.7C-36.9,-9.5,-32.7,-19,-25.8,-23.3C-19,-27.6,-9.5,-26.7,-2.7,-24C4.2,-21.4,8.3,-17,14,-12.6Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
      ></path>
    </svg>
  );
}
