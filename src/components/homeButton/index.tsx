import React from "react";
import "./homeButton.css";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link href="/" className="home-button">
      <IoHome size={30} color="#fff" className="home-icon" />
    </Link>
  );
};

export default HomeButton;
