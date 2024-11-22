import "./container.css";

type ContainerProps = {
  children: React.ReactNode;
  img: string;
};

const Container: React.FC<ContainerProps> = ({ children, img }) => {
  return (
    <main className="container">
      <section className="container-content">
        {children}
      </section>
    </main>
  );
};

export default Container;
