import type { Metadata } from "next";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/UserContext";

export const metadata: Metadata = {
  title: "GarroVision",
  description: "Soluções inovadoras em energia sustentável e renovável para um futuro melhor.",
  keywords: [
    "GarroVision",
    "energia sustentável",
    "sustentabilidade",
    "energias renováveis",
    "tecnologia sustentável",
    "futuro sustentável",
    "eficiência energética",
  ],
  openGraph: {
    title: "GarroVision",
    description: "Soluções inovadoras em energia sustentável e renovável para um futuro melhor.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
          <ToastContainer theme="dark" autoClose={2300} pauseOnHover={false} />
        </UserProvider>
      </body>
    </html>
  );
}
