// container.tsx
import "./container.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface ContainerProps {
  img?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, img }) => {
  return (
    <div className="container">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
