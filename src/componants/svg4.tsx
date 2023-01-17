import styles from "../styles/svg.module.css";

export default function Svg4() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg4}
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
        d="M21.3,-23.7C28.9,-18.9,37.3,-13.5,40.3,-5.8C43.2,2,40.7,12,35.3,19.3C29.8,26.5,21.4,31,12.5,34.3C3.6,37.5,-5.8,39.5,-12.1,36C-18.5,32.6,-21.9,23.6,-25.8,15.5C-29.7,7.5,-34.2,0.3,-34.9,-8C-35.7,-16.4,-32.8,-26,-26.4,-31C-19.9,-36,-10,-36.3,-1.6,-34.4C6.8,-32.6,13.6,-28.5,21.3,-23.7Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
      ></path>
    </svg>
  );
}
