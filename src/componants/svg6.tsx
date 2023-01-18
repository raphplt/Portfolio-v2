import styles from "../styles/svg.module.css";

export default function Svg6() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg6}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stop-color="rgba(7.288, 141.72, 255, 1)"
            offset="0%"
            data-darkreader-inline-stopcolor=""
          ></stop>
          <stop
            id="stop2"
            stop-color="rgba(13.544, 11.91, 28.104, 1)"
            offset="100%"
            data-darkreader-inline-stopcolor=""
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M28.2,-34.6C35.3,-27.7,38.8,-17.6,38.7,-8.3C38.7,1.1,35,9.6,30.8,18.6C26.6,27.6,21.8,37.1,13.9,41.5C6,45.9,-5.1,45,-12.9,40.2C-20.8,35.3,-25.4,26.3,-29.5,17.8C-33.6,9.2,-37.1,1,-35.8,-6.2C-34.4,-13.4,-28.1,-19.7,-21.3,-26.7C-14.5,-33.6,-7.3,-41.2,1.7,-43.2C10.6,-45.1,21.2,-41.5,28.2,-34.6Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
      ></path>
    </svg>
  );
}
