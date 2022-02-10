import React from "react";
import ButtonsBtn from "../components/ButtonsBtn";
import Mouse from "../components/Mouse";
import Navigation from "./../components/Navigation";
import Logo from "./../components/Logo";
import CopyToClipboard from "react-copy-to-clipboard";
import SocialNetwork from "./../components/SocialNetwork";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  // réglages framer
  const variants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };
  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={variants}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>6 rue du code</p>
              <p>57000 Metz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0678520635" className="hover">
                {/*
               dans la balise CopyToClipboard il faut injecter le css
               directement dans les balises
              */}
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  0678520635
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="shi@foo.mi" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  Shi@foo.mi
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>JADH - 2021</p>
          </div>
        </div>
        <ButtonsBtn left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
