import React from "react";
import Container from "@/components/container";
import "./criadores.css";
import Card from "@/components/card";
import ImgMurilo from "/public/assets/img05.jpg";
import ImgThiago from "/public/assets/img04.jpg";
import ImgIan from "/public/assets/img06.png";

const Criadores = () => {
  return (
    <Container img="img07.png">
      <section className="criadores_main">
        <h2 className="criadores_title">Conheça os Criadores</h2>
        <p className="criadores_subtitle">
          Um time de inovadores que está transformando o futuro da gestão de energia renovável.
        </p>

        <div className="card_container">
          <Card
            nome="Murilo Ribeiro"
            rm="555109"
            sala="1TDSPZ"
            github="https://github.com/murilors27"
            img={ImgMurilo.src}
          />

          <Card
            nome="Thiago Garcia"
            rm="99404"
            sala="1TDSPY"
            github="https://github.com/thiago-tonato"
            img={ImgThiago.src}
          />

          <Card
            nome="Ian Madeira"
            rm="555502"
            sala="1TDSPY"
            github="https://github.com/IanMadeira"
            img={ImgIan.src}
          />
        </div>
      </section>
    </Container>
  );
};

export default Criadores;
