import React, { useEffect } from "react";

// bulle autour de la souris
const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const handleCursor = (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    };
    window.addEventListener("mousemove", handleCursor);

    // effet de la souris au dessus des liens
    const handleHover = () => {
      cursor.classList.add("hovered");
    };

    const handleLeave = () => {
      cursor.style.transition = ".3s ease-out";
      cursor.classList.remove("hovered");
    };

    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });
  }, []);
  return <span className="cursor"></span>;
};

export default Mouse;
