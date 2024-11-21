import type { Metadata } from "next";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/UserContext";

export const metadata: Metadata = {
  title: "OpalaVision",
  description: "O futuro da detecção de problemas automotivos ao seu alcance",
  keywords: [
    "OpalaVision",
    "oficina",
    "oficina de carros",
    "carros",
    "manuntenção de carros",
    "detecção problemas",
    "problemas automotivos",
  ],
  openGraph: {
    title: "OpalaVision",
    description: "O futuro da detecção de problemas automotivos ao seu alcance",
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
