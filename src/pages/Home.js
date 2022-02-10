import React from "react";
import ButtonsBtn from "../components/ButtonsBtn";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Home = () => {
  // framer réglages et positionnement
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div
        className="home"
        // appelle des variants
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            {/* drag and drop sur h1 et h2 avec framer */}
            <motion.h1 drag OnDragEnd>
              JADH AGENCY
            </motion.h1>
            {/* empêcher le drag de sortir entièrement de l'écran*/}
            <motion.h2
              drag
              OnDrag
              dragConstraints={{
                left: -250,
                right: 550,
                top: -200,
                bottom: 250,
              }}
            >
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        <ButtonsBtn right={"project-1"} />
      </motion.div>
    </main>
  );
};

export default Home;
