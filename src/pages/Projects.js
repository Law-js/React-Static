import React from "react";
import ButtonsBtn from "../components/ButtonsBtn";
import Navigation from "./../components/Navigation";
import Logo from "../components/Logo";
import Project from "../components/Project";
import Mouse from "../components/Mouse";

//ButtonsBtn pour le scroll des pages

export const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <ButtonsBtn left={"/"} right={"/project-2"} />
      </div>
    </main>
  );
};
export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <ButtonsBtn left={"/project-1"} right={"/project-3"} />
      </div>
    </main>
  );
};
export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <ButtonsBtn left={"/project-2"} right={"/project-4"} />
      </div>
    </main>
  );
};
export const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <ButtonsBtn left={"/project-3"} right={"/contact"} />
      </div>
    </main>
  );
};
