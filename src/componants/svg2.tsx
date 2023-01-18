import styles from "../styles/svg.module.css";

export default function Svg2() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg2}
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
            stop-color="rgba(43.01, 0, 255, 1)"
            offset="100%"
            data-darkreader-inline-stopcolor=""
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M25.4,-31.7C32.2,-24.6,36.3,-15.9,35.5,-8.1C34.7,-0.3,28.8,6.5,24.4,14C19.9,21.5,16.9,29.8,11.1,33C5.3,36.2,-3.3,34.3,-10.1,30.6C-17,26.9,-22.1,21.3,-26.4,14.8C-30.6,8.3,-34,0.9,-32.2,-5.1C-30.5,-11.1,-23.8,-15.7,-17.6,-22.9C-11.3,-30.1,-5.7,-39.9,1.8,-42.1C9.3,-44.3,18.7,-38.8,25.4,-31.7Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
}
