import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import BdeAdvantages from "../components/BdeAdvantages";
import Activities from "../components/Activities";
import WhyJoin from "../components/WhyJoin";
import Newsletter from "../components/Newsletter";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <div className="sections-container">
          <BdeAdvantages />
          <Activities />
          <WhyJoin />
        </div>
        <Announcements />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
