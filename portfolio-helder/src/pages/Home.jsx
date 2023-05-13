import React from "react";
import { useState } from "react";
import LoadingAnimaion from "../components/LoadingAnimaion";
import SkillsSection from "../components/SkillsSection";
import NavBar from "../components/NavBar";

import '../styles/Home.css'
import HeroSection from "../components/HeroSection";
import CasesSection from "../components/CasesSection";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3000);
  return (
    <div>
      {loading ? (
        <LoadingAnimaion />
        ) : (
        <div>
          <NavBar />
          <HeroSection />
          <SkillsSection />
          <CasesSection />
        </div>
      )}
    </div>
  );
};

export default Home;
