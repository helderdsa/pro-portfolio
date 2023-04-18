import React from "react";
import { useState } from "react";
import LoadingAnimaion from "../components/LoadingAnimaion";
import SkillDisplay from "../components/SkillDisplay";
import NavBar from "../components/NavBar";

import '../styles/Home.css'
import HeroSection from "../components/HeroSection";
import CasesSection from "../components/CasesSection";
import { skillsData } from "../data/skillsData";

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
          <CasesSection />
          <div className="skills-section">
            {
              skillsData.map((skill) =>
              <SkillDisplay
                name={skill.name}
                description={skill.description}
                image={skill.image}
              />)
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
