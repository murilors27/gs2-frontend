import Link from "next/link";
import "./card.css";
import Image from "next/image";

type CardProps = {
  nome: string;
  rm: string;
  sala: string;
  img: string;
  github: string;
};

const Card = ({ nome, rm, sala, img, github }: CardProps) => {
  return (
    <section className="card_container">
      <div className="card">
        <Image
          src={img}
          alt="criador01"
          className="img-criador"
          height={332}
          width={200}
          quality={100}
        />

        <div className="card_content">
          <p>{nome}</p>

          <p>{rm}</p>

          <p>{sala}</p>
        </div>

        <Link href={github} target="_blank" className="card__link">
          GitHub
        </Link>
      </div>
    </section>
  );
};

export default Card;
