import React from "react";
import Header from "../components/Header";
import Portifolio from "../components/Portifolio";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div className="container-fluid bg-info p-2">
      <Header />
      <Profile />
      <Portifolio />
      <span className="fixed-bottom text-bg-dark">Direitos reservados ©</span>
    </div>
  );
}
