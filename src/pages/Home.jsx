import React from "react";
import { useState } from "react";
import LoadingAnimaion from "../components/LoadingAnimaion";
import SkillsSection from "../components/SkillsSection";
import '../styles/Home.css'
import HeroSection from "../components/HeroSection";
import CasesSection from "../components/CasesSection";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 2000);
  return (
    <div>
      {loading ? (
        <LoadingAnimaion />
        ) : (
        <div>
          <HeroSection />
          <SkillsSection />
          <CasesSection />
        </div>
      )}
    </div>
  );
};

export default Home;
