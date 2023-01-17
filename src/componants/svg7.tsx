import styles from "../styles/svg.module.css";

export default function Svg7() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg7}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stop-color="rgba(10.73, 170.937, 235.718, 1)"
            offset="0%"
            data-darkreader-inline-stopcolor=""
          ></stop>
          <stop
            id="stop2"
            stop-color="rgba(20.042, 10.912, 101.388, 1)"
            offset="100%"
            data-darkreader-inline-stopcolor=""
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M22.8,-27.9C29.3,-21.6,34.4,-14.3,34.9,-6.8C35.4,0.6,31.3,8.2,26.6,14.5C21.9,20.9,16.7,26.1,9.7,30.1C2.8,34,-5.8,36.8,-13.8,35.1C-21.9,33.4,-29.3,27.3,-31.9,19.9C-34.5,12.4,-32.3,3.6,-30.7,-5.4C-29.1,-14.4,-28.3,-23.5,-23.3,-30.1C-18.3,-36.7,-9.1,-40.6,-0.5,-40C8.1,-39.4,16.2,-34.2,22.8,-27.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
      ></path>
    </svg>
  );
}
