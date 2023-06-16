import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Firstdesc from "../components/Firstdesc";
import SecondDesc from "../components/SecondDesc";
import BottomImages from "../components/BottomImages";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Firstdesc />
      <SecondDesc />
      <BottomImages />
      <Footer />
    </div>
  );
};

export default Home;
