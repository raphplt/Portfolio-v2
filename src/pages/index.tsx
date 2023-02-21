/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../styles/Index.module.css";
import Image from "next/image";
import MetaData from "../componants/metadata";
import Svg1 from "../componants/svg1";
import Svg2 from "../componants/svg2";
import Svg3 from "../componants/svg3";
import Header from "../componants/header";
import Wave from "../componants/svgWave";
import Card from "../componants/card";
import me from "../../public/assets/medias/me.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import Svg4 from "../componants/svg4";
import macAfa from "../../public/assets/medias/mac-afa.png";
import tabAfa from "../../public/assets/medias/tab-afa.png";
import phoneAfa from "../../public/assets/medias/phone-afa.png";
import macMg from "../../public/assets/medias/mac-mg.png";
import tabMg from "../../public/assets/medias/tab-mg.png";
import phoneMg from "../../public/assets/medias/phone-mg.png";
import macRp from "../../public/assets/medias/mac-rp.png";
import tabRp from "../../public/assets/medias/tab-rp.png";
import phoneRp from "../../public/assets/medias/phone-rp.png";
import Svg5 from "../componants/svg5";
import Svg6 from "../componants/svg6";
import Svg7 from "../componants/svg7";
import Wave2 from "../componants/svgWave2";
import Skill from "../componants/skill";
import Wave3 from "../componants/svgWaves3";
import Wave4 from "../componants/svgWaves4";
import Footer from "../componants/footer";

export default function Home() {
  const [isVisibleTitle, setIsVisibleTitle] = useState(true);
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisibleTitleP, setIsVisibleTitleP] = useState(true);
  const [isVisiblePr1, setIsVisiblePr1] = useState(true);
  const [isVisiblePr2, setIsVisiblePr2] = useState(true);
  const [isVisiblePr3, setIsVisiblePr3] = useState(true);
  const [isVisibleTitleC, setIsVisibleTitleC] = useState(true);
  const [isVisibleCpt, setIsVisibleCpt] = useState(true);
  const [isVisibleTitleW, setIsVisibleTitleW] = useState(true);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToShowFromTitle = 400;
    let heightToShowFrom1 = 600;
    let heightToShowFrom2 = 900;
    let heightToShowFrom3 = 1200;
    let heightToShowFromTitleP = 1900;
    let heightToShowFromPr1 = 2400;
    let heightToShowFromPr2 = 3400;
    let heightToShowFromPr3 = 4700;
    let heightToShowFromPTitleC = 6500;
    let heightToShowFromCpt = 6700;
    let heightToShowFromTitleW = 8000;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToShowFromTitle) {
      isVisibleTitle && setIsVisibleTitle(true);
    } else {
      setIsVisibleTitle(false);
    }
    if (winScroll > heightToShowFrom1) {
      isVisible1 && setIsVisible1(true);
    } else {
      setIsVisible1(false);
    }
    if (winScroll > heightToShowFrom2) {
      isVisible2 && setIsVisible2(true);
    } else {
      setIsVisible2(false);
    }
    if (winScroll > heightToShowFrom3) {
      isVisible3 && setIsVisible3(true);
    } else {
      setIsVisible3(false);
    }
    if (winScroll > heightToShowFromTitleP) {
      isVisibleTitleP && setIsVisibleTitleP(true);
    } else {
      setIsVisibleTitleP(false);
    }
    if (winScroll > heightToShowFromPr1) {
      isVisiblePr1 && setIsVisiblePr1(true);
    } else {
      setIsVisiblePr1(false);
    }
    if (winScroll > heightToShowFromPr2) {
      isVisiblePr2 && setIsVisiblePr2(true);
    } else {
      setIsVisiblePr2(false);
    }
    if (winScroll > heightToShowFromPr3) {
      isVisiblePr3 && setIsVisiblePr3(true);
    } else {
      setIsVisiblePr3(false);
    }
    if (winScroll > heightToShowFromPTitleC) {
      isVisibleTitleC && setIsVisibleTitleC(true);
    } else {
      setIsVisibleTitleC(false);
    }
    if (winScroll > heightToShowFromCpt) {
      isVisibleCpt && setIsVisibleCpt(true);
    } else {
      setIsVisibleCpt(false);
    }
    if (winScroll > heightToShowFromTitleW) {
      isVisibleTitleW && setIsVisibleTitleW(true);
    } else {
      setIsVisibleTitleW(false);
    }
  };

  return (
    <div>
      <MetaData />
      <Header />
      <div className={styles.pageTop}>
        <div className={styles.pageTopPhone}>
          <div className={styles.pageTitle}>
            <h1>Raphaël Plassart</h1>
            <h2>Développeur Full-stack</h2>
            <p>
              Passionné par le développement web, je saurai répondre à vos
              attentes d&apos;une manière créative, moderne et responsive.
            </p>
            <div className={styles.moreInfos}>
              <Link href={"https://github.com/raphplt"} target={"_blank"}>
                <div className={styles.button} id={styles.btn1}>
                  Voir mon Gihub
                </div>
              </Link>

              <Link href="/cvRaphaelPlassart.pdf">
                <div className={styles.button} id={styles.btn2}>
                  Télécharger mon CV
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.pageTopLeft}>
          <a href="#mentorgoal">
            <Card
              name="Mentor Goal Blog"
              desc="[Défi - Gagnants] Concours pour la création du blog de l'entreprise Mentor Goal"
              img="assets/medias/mg.png"
              href="#https://github.com/raphplt/Aid-for-Animals"
            />
          </a>
          <a href="#aidforanimals">
            <Card
              name="Aid for Animals"
              desc="Création d'un site d'e-commerce pour la défense des animaux."
              img="assets/medias/afa.png"
            />
          </a>
        </div>
        <Svg1 />
        <div className={styles.pageTopRight}>
          <div className={styles.pageTitle}>
            <h1>Raphaël Plassart</h1>
            <h2>Développeur Full-stack</h2>
            <p>
              Passionné par le développement web, je saurai répondre à vos
              attentes d&apos;une manière créative, moderne et responsive.
            </p>
            <div className={styles.moreInfos}>
              <Link href={"https://github.com/raphplt"} target={"_blank"}>
                <div className={styles.button} id={styles.btn1}>
                  Voir mon Gihub
                </div>
              </Link>
              <a href="/cvRaphaelPlassart.pdf" target={"_blank"}>
                <div className={styles.button} id={styles.btn2}>
                  Télécharger mon CV
                </div>
              </a>
            </div>
          </div>
        </div>
        <Svg2 />
        <div className={styles.boule}></div>
      </div>
      <div className={styles.pageMe}>
        <div className={styles.quiSuisJe} id={"quiSuisJe"}>
          {isVisibleTitle && (
            <>
              <Image src={me} alt="Logo" className={styles.me} />
              <h2>Qui-suis-je ?</h2>
              <Svg3 />
            </>
          )}
          <div className={styles.text} id={styles.textTop}>
            {isVisible1 && (
              <div className={styles.paragraph}>
                <h3>Scolarité</h3>
                <p>
                  J&apos;ai découvert ma passion pour l&apos;informatique en
                  3ème, en créant un clone du jeu vidéo Mario. Au lycée,
                  j&apos;ai suivi la spécialité NSI (Numérique et Sciences
                  Informatiques) ou j&apos;ai appris les bases du développement
                  à travers le langage Python et les langages web. J&apos;ai
                  réalisé de nombreux mini-projets seul ou en binôme qui
                  m&apos;ont appris à travailler en équipe.
                </p>
              </div>
            )}
          </div>
          <div className={styles.text} id={styles.textMiddle}>
            {isVisible2 && (
              <>
                <div className={styles.paragraph} id={styles.right}>
                  <h3>Expériences</h3>
                  <p>
                    J&apos;ai pu réaliser différents projets au cour de ma
                    scolarité à l&apos;ETNA, commme la création d un jeu vidéo
                    RPG dans l&apos;univers de Zelda en Typescript, ou la
                    conception d&apos;un site d&apos;e commerce avec un Back-end
                    en ExpressJS et un Front end en NextJS. Plus recemment,
                    j&apos;ai réalisé le blog de l&apos;entreprise Mentor Goal,
                    à partir d&apos;une maquette Figma, un Back-end en Strapi et
                    un Front-end en NextJS.
                  </p>
                </div>
                <Svg4 />
              </>
            )}
          </div>
          <div className={styles.text} id={styles.textBottom}>
            {isVisible3 && (
              <div className={styles.paragraph}>
                <h3>Autodidacte</h3>
                <p>
                  Ma passion du web s&apos;est développée grandement avec des
                  projets personnels. Depuis le lycée, j&apos;ai pu réaliser
                  plusieurs projets en autodidacte comme la création d&apos;un
                  site dédié à une de mes passions: la photographie. Ces projets
                  personnels m&apos;ont encouragés à apprendre par moi même, et
                  à être toujours curieux des nouvelles technologies.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Wave />
      <div className={styles.pageProjects} id={"projets"}>
        {isVisibleTitleP && <h2>Projets</h2>}
        {isVisiblePr1 && (
          <div className={styles.projectContainer} id="mentorgoal">
            <Svg5 />
            <div className={styles.devices} id={styles.left}>
              <Image
                src={macMg}
                alt="The website shown in PC format"
                className={styles.devicePC}
              />
              <div className={styles.devicesChild} id={styles.left}>
                <Image
                  src={tabMg}
                  alt="The website shown in tablet format"
                  className={styles.deviceTab}
                />
                <Image
                  src={phoneMg}
                  alt="The website shown in phone format"
                  className={styles.devicePhone}
                />
              </div>
            </div>
            <div className={styles.projectInfos}>
              <h3>Mentor Goal</h3>
              <p>
                Création du blog de la société Mentor Goal, à partir d&apos;une
                maquette Figma avec Strapi pour le Backend et ReactJS (NextJS)
                pour le Frontend.
              </p>
              <Link href={"https://github.com/raphplt"} target={"_blank"}>
                <div className={styles.button} id={styles.btn3}>
                  Voir le projet
                </div>
              </Link>
            </div>
          </div>
        )}
        {isVisiblePr2 && (
          <div className={styles.projectContainer} id={styles.phone}>
            <Svg6 />
            <div className={styles.projectInfos}>
              <h3>Aid for Animals</h3>
              <p>
                Création d&apos;un site d&apos;e-commerce (Front-end et
                Back-end) orienté ves la défense des animaux.
              </p>
              <Link href={"https://github.com/raphplt"} target={"_blank"}>
                <div className={styles.button} id={styles.btn3}>
                  Voir le projet
                </div>
              </Link>
            </div>
            <div className={styles.devices}>
              <Image
                src={macAfa}
                alt="The website shown in PC format"
                className={styles.devicePC}
              />
              <div className={styles.devicesChild}>
                <Image
                  src={tabAfa}
                  alt="The website shown in tablet format"
                  className={styles.deviceTab}
                />
                <Image
                  src={phoneAfa}
                  alt="The website shown in phone format"
                  className={styles.devicePhone}
                />
              </div>
            </div>
          </div>
        )}
        {isVisiblePr2 && (
          <div className={styles.projectContainer} id={styles.hide}>
            <Svg6 />
            <div className={styles.devices} id={styles.left}>
              <Image
                loader={() => `../../public/assets/medias/tab-afa.png`}
                src={macAfa}
                alt="The website shown in PC format"
                className={styles.devicePC}
              />
              <div className={styles.devicesChild} id={styles.left}>
                <Image
                  loader={() => `../../public/assets/medias/tab-afa.png`}
                  src={tabAfa}
                  alt="The website shown in tablet format"
                  className={styles.deviceTab}
                />
                <Image
                  loader={() => `../../public/assets/medias/phone-afa.png`}
                  src={phoneAfa}
                  alt="The website shown in phone format"
                  className={styles.devicePhone}
                />
              </div>
            </div>
            <div className={styles.projectInfos} id="aidforanimals">
              <h3>Aid for Animals</h3>
              <p>
                Création d&apos;un site d&apos;e-commerce (Front-end et
                Back-end) orienté ves la défense des animaux.
              </p>
              <Link href={"https://github.com/raphplt"} target={"_blank"}>
                <div className={styles.button} id={styles.btn3}>
                  Voir le projet
                </div>
              </Link>
            </div>
          </div>
        )}
        {isVisiblePr3 && (
          <div className={styles.projectContainer} id={styles.pr3}>
            <Svg7 />
            <div className={styles.devices} id={styles.left}>
              <Image
                loader={() => `../../public/assets/medias/tab-rp.png`}
                src={macRp}
                alt="The website shown in PC format"
                className={styles.devicePC}
              />
              <div className={styles.devicesChild} id={styles.left}>
                <Image
                  src={tabRp}
                  alt="The website shown in tablet format"
                  className={styles.deviceTab}
                  id={styles.pr3}
                />
                <Image
                  src={phoneRp}
                  alt="The website shown in phone format"
                  className={styles.devicePhone}
                  id={styles.pr3}
                />
              </div>
            </div>
            <div className={styles.projectInfos}>
              <h3>Raphotos</h3>
              <p>
                Conception d&apos;un site d&apos; vitrine dédié à une de mes
                passions : la photographie.
              </p>
              <Link href={"https://github.com/raphplt"} target={"_blank"}>
                <div className={styles.button} id={styles.btn3}>
                  Voir le projet
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className={styles.pageCompetences} id={"competences"}>
        <Wave2 />
        {isVisibleTitleC && <h2>Compétences</h2>}
        {isVisibleCpt && (
          <div className={styles.competencesContainer}>
            <Skill
              title="Web"
              skill1="HTML"
              skillLvl1="[Intermédiaire]"
              img1="assets/medias/HTML.png"
              skill2="CSS"
              skillLvl2="[Avancé]"
              img2="assets/medias/CSS.png"
              skill3="ReactJS"
              skillLvl3="[Débutant]"
              img3="assets/medias/ReactJS.png"
              skill4="NextJS"
              skillLvl4="[Intermédiaire]"
              img4="assets/medias/NextJS.png"
              skill5="ExpressJS"
              skillLvl5="[Débutant]"
              img5="assets/medias/ExpressJS.png"
            />
            <Skill
              title="Algorithmie"
              skill1="Python"
              skillLvl1="[Intermédiaire]"
              img1="assets/medias/Python.png"
              skill2="TypeScript"
              skillLvl2="[Intermédiaire]"
              img2="assets/medias/Typescript.png"
              skill3="Javascript"
              skillLvl3="[Débutant]"
              img3="assets/medias/Javascript.png"
            />
            <Skill
              title="Autres"
              skill1="Figma"
              skillLvl1="[Débutant]"
              img1="assets/medias/Figma.png"
              skill2="MySQL"
              skillLvl2="[Débutant]"
              img2="assets/medias/MySQL.png"
              skill3="VSCode"
              skillLvl3="[Intermédiaire]"
              img3="assets/medias/VSCode.png"
              skill4="Linux"
              skillLvl4="[Débutant]"
              img4="assets/medias/Linux.png"
            />
          </div>
        )}
      </div>
      <Wave3 />
      <div className={styles.pageContact} id="contact">
        {isVisibleTitleW && (
          <>
            <h2>Contact</h2>
            <h4>
              Je serai ravi de d&apos;échanger avec vous pour réaliser l&apos;un
              de vos projets
            </h4>

            <div className={styles.contactBox}>
              <h3>Mail: plassa_r@etna@alternance.net</h3>
              <h3>LinkedIn: Raphaël Plassart</h3>
              <h3>Github: raphplt</h3>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
