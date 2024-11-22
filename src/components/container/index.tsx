import Footer from "../footer";
import Header from "../header";
import "./container.css";

type ContainerProps = {
  children: React.ReactNode;
  img: string;
};

const Container: React.FC<ContainerProps> = ({ children, img }) => {
  return (
    <main
      className="container"
    >
      <section className="container-content">
        <Header />
        {children}

      </section>
    </main>
  );
};

export default Container;