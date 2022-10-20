import React from "react";
import gitHub from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://github.com/HelenCarolini"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHub} alt="ícone do facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/helen-carolini-pereira-1a8691230/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="ícone do twitter" />
        </a>
        <a
          href="https://www.instagram.com/helen.carolini/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Helen Carolini</p>
    </footer>
  );
}